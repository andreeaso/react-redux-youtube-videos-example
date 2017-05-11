import React, {Component, PropTypes} from 'react';

export default class Search extends Component {
    static propTypes = {
        searchVideos: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    updateSearch(evt){
        this.setState({search: evt.target.value});
    }

    render() {
        const {searchVideos} = this.props;
        return (
            <div className="search-container">
            <form onSubmit={(e) => {e.preventDefault(); searchVideos(this.state.search)}}>
                <input type='text' value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                <button type='submit'>Search</button>
            </form>
            </div>
        );
    }
}