import React, {Component, PropTypes} from 'react';

export default class VideoPlayer extends Component {
    static propTypes = {
        videoId: PropTypes.string,
    };

    render() {
        const {videoId} = this.props;

        return (
            <div>
                {videoId ?
                    <iframe type="text/html"
                            src={`http://www.youtube.com/embed/${videoId}?autoplay=1`}
                            frameBorder="0">
                    </iframe>
                    :
                    <div>Select a video!</div>}
            </div>
        );
    }
}