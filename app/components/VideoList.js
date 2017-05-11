import React, {Component, PropTypes} from 'react';

export default class VideoList extends Component {
    static propTypes = {
        videos: PropTypes.array.isRequired,
        selectVideo: PropTypes.func.isRequired
    };

    render() {
        const {videos, selectVideo} = this.props;
        return (
            <div>
                {videos.map(video =>
                    <div key={video.id}>
                        <div>{video.title}</div>
                        <img src={video.thumbnail.url} onClick={() => selectVideo(video.id)}/>
                    </div>)
                }
            </div>
        );
    }
}
