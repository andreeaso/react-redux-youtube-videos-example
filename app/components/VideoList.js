import React, {Component, PropTypes} from 'react';

export default class VideoList extends Component {
    static propTypes = {
        videos: PropTypes.array.isRequired,
        selectVideo: PropTypes.func.isRequired
    };

    render() {
        const {videos, selectVideo} = this.props;
        return (
            <div className='video-list'>
                {videos.map(video =>
                    <div className='video-sample' key={video.id}>
                        <img src={video.thumbnail.url} onClick={() => selectVideo(video.id)}/>
                        <div className='video-title'>{video.title}</div>
                    </div>)
                }
            </div>
        );
    }
}
