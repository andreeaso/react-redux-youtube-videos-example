import {handleActions} from 'redux-actions'

const SELECT_VIDEO = 'SELECT_VIDEO';

export const selectVideo = (videoId) => ({
    type: SELECT_VIDEO,
    payload: videoId
});

export const playerActionsHandler = handleActions({
    [SELECT_VIDEO]: (state, action) => {
        return {...state, currentVideoId: action.payload}
    }
}, {currentVideoId: ''});

