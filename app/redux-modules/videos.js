import {handleActions} from 'redux-actions'

const SEARCH_SUCCESS = 'SEARCH_VIDEOS_SUCCESS';

export const searchSuccess = (videoList) => ({
    type: SEARCH_SUCCESS,
    payload: videoList
});

export const searchVideos = (searchText) => {
    return dispatch => {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchText}&maxResults=50&type=video&key=AIzaSyDcO63CsuWg5BAoBA4QiiGPVYASZpM-5Uc`)
            .then(response => response.json())
            .then(searchResult => {
                dispatch(searchSuccess(searchResult.items));
            });
    }
};

export const videosActionHandler = handleActions({
    [SEARCH_SUCCESS]: (state, action) => {
        return {
            ...state,
            videoList: action.payload.map(video => {
                return {id: video.id.videoId, title: video.snippet.title, thumbnail: video.snippet.thumbnails.default}
            })
        };
    }
}, {videoList: []});

