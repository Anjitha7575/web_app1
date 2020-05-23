import React, { Component, Fragment } from 'react';
import _get from 'lodash/get';
import _isEqual from 'lodash/isEqual';
import _isEmpty from 'lodash/isEmpty';
import { SearchBox, HistoryBox, HistoryList } from './styles';
import { getMovieLanguages } from '../../../utils';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            language: 'All',
            searchHistory: []
        }
    }


    handleSearchChange = (ev) => {
        const { name, value } = ev.target;
        this.setState({ [name]: value });
    }

    submitSearch = () => {
        this.getLatestSearch();
        this.props.sendData(this.state);
    }

    getLatestSearch = () => {
        const { searchText, language, searchHistory } = this.state;
        if (searchText) { searchHistory.unshift({ 'searchText': searchText, language: language }); }
        if (searchHistory.length > 3) {
            searchHistory.splice(3, 1);
        }
        this.setState({ 'searchHistory': searchHistory });
    }

    deleteAll = () =>{
        const { searchHistory } = this.state;
        this.setState({ 'searchHistory': [] });
    }

    deleteOneHistory = (index) =>{
        const { searchHistory } = this.state;
        let temp = searchHistory.splice(index ,1);
        this.setState({ 'searchHistory': searchHistory });
    }

    render() {
        const { title, allMovies } = this.props;
        const results = _get(allMovies, 'data.results', '');
        let langOptions = getMovieLanguages(results);
        const { searchHistory } = this.state;
        return (
            <Fragment>
                <SearchBox>
                    <input type="text" id="search-bar" className="search-bar"  name="searchText" onChange={this.handleSearchChange} placeholder={title} />
                    {/* <label className="search-text"> | </label> */}
                    <div>
                        <label className="search-text">Language</label>
                        <select className="custom-select" name="language" onChange={this.handleSearchChange} >
                            <option key='All' value="All">All</option>
                            {langOptions.map(lang =>
                                <option key={lang} value={lang}>{lang}</option>
                            )};
                    </select>
                    </div>
                    <div>
                        <button className="search-btn" onClick={this.submitSearch}>Search</button>
                    </div>
                </SearchBox>
                {!_isEmpty(searchHistory) && <HistoryBox>
                    <div className="del-all" onClick={this.deleteAll}>Delete All</div>
                    <ul>
                        {searchHistory.map((history, index) =>
                            <HistoryList key={index} >
                                <span>{history.searchText}</span> / <span>{history.language}</span> 
                                <span className="del-one" onClick={()=>this.deleteOneHistory(index)}>X</span>
                            </HistoryList>
                        )}
                    </ul>
                </HistoryBox>}
            </Fragment>
        )
    }
}

export default SearchBar;