import React, {Component, PropTypes} from 'react';
import styles from './Search.scss';

export default class Search extends Component {
    static propTypes = {
        searchVideos: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            search: ''
        };

        this.updateSearch = this.updateSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateSearch(event){
        this.setState({search: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.searchVideos(this.state.search);
    }

    render() {
        return (
            <div className={styles.container}>
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.search} onChange={this.updateSearch}/>
                <button type='submit'>Search</button>
            </form>
            </div>
        );
    }
}