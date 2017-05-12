import React, {Component, PropTypes} from 'react';
import styles from './VideoList.scss';

export default class VideoList extends Component {
    static propTypes = {
        videos: PropTypes.array.isRequired,
        selectVideo: PropTypes.func.isRequired
    };

    render() {
        const {videos, selectVideo} = this.props;
        return (
            <div className={styles.list}>
                {videos.map(video =>
                    <div className={styles.sample} key={video.id}>
                        <img src={video.thumbnail.url} onClick={() => selectVideo(video.id)}/>
                        <div className={styles.title}>{video.title}</div>
                    </div>)
                }
            </div>
        );
    }
}
