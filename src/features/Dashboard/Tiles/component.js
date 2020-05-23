import React, { Component, Fragment } from 'react';
import ReactTooltip from "react-tooltip";
import _isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';
import SearchBar from '../SearchBar/container';
import { Grid, Box, ViewDetails, 
    Title, Lang, Rate
 } from './styles';

class Tiles extends Component {
    constructor() {
        super();
        this.state = {
            searchData: ''
        }
    }

    handleSearchChange = (data) => {
        this.setState({ searchData: data });
    }

    filterData = (allMovies) => {
        const { searchData } = this.state;
        let filterData = allMovies;
        if (searchData) {
            filterData = allMovies.filter((movie) => {
                return (movie['title'].toLowerCase().includes(searchData['searchText'].toLowerCase()))
                    && (searchData.language === 'All' ? movie.original_language : movie.original_language === searchData.language);
            })
        }
        return filterData;
    }

    render() {
        const { allMovies } = this.props;
        const filterData = this.filterData(allMovies);
        return (
            <Grid>
                <SearchBar title={"Movie titles..."} sendData={this.handleSearchChange} />
                <ViewDetails>
                    {!_isEmpty(filterData) ?
                        <Fragment>
                            {filterData.map((movie, index) =>
                                <Box key={index} data-tip={movie.overview}>
                                    <Title>{movie.original_title}</Title>
                                    <Lang>{movie.original_language}</Lang>
                                    <Rate>{movie.vote_average} <i className="fas fa-star" style={{ 'color': 'brown', 'fontSize': '25px' }}></i></Rate>
                                    <ReactTooltip className="m-tooltip" />
                                </Box>)}
                        </Fragment> : <div>No Results Found....</div>
                    }
                </ViewDetails>
            </Grid>
        )
    }
}

export default Tiles;