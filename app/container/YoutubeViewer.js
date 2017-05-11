import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Search from "../components/Search";
import {searchVideos, selectVideo} from 'redux-modules/videos';
import VideoList from "../components/VideoList";
import VideoPlayer from "../components/VideoPlayer";

export class YoutubeViewer extends Component {
    static propTypes = {
        searchVideos: PropTypes.func.isRequired,
        videoList: PropTypes.array,
        currentVideoId: PropTypes.string,
        selectVideo: PropTypes.func
    };

    render() {
        const {searchVideos, videoList, currentVideoId, selectVideo} = this.props;
        return (
            <div>
                <div>
                    <Search searchVideos={searchVideos}/>
                    <VideoPlayer videoId={currentVideoId}/>
                    <VideoList videos={videoList} selectVideo={selectVideo}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    videoList: state.videos.videoList,
    currentVideoId: state.videos.currentVideoId
});

const mapDispatchToProps = dispatch => ({
    searchVideos: (searchText) => dispatch(searchVideos(searchText)),
    selectVideo: (videoId) => dispatch(selectVideo(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeViewer);