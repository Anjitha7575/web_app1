import React, { Component } from 'react';

import Pagination from "react-js-pagination";
import "bootstrap/dist/css/bootstrap.min.css";

import _isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';
import Tiles from './Tiles/container';
import {
    MoviesBox, LoadingImg,
    MainView, PaginationBox
} from './styles';
import { LoadingIcon } from '../../constants';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            total_pages : 0
        }
    }

    componentDidMount() {
        const { currentPage } = this.state;
        this.props.getMovies(currentPage);
    }

    showMovieStatus = (allMovies) => {
        const status = _get(allMovies, 'status', '');
        const results = _get(allMovies, 'data.results', '');
        switch (status) {
            case 'success':
                return <Tiles allMovies={results} />;
            case 'loading':
                return <LoadingImg src={LoadingIcon} alt="Loading..." />;
            case 'error':
                return <div>Something went wrong!!</div>;
            default:
                return null;
        }
    }

    componentWillReceiveProps(nextProps, prevProps){
        const { allMovies } = nextProps;
        this.setState({'currentPage': _get(allMovies, 'data.page', 1)});
        this.setState({'total_pages': _get(allMovies, 'data.total_pages', 0)});
    }

    goToPrev = () => {
        const { currentPage, total_pages } = this.state;
        if(currentPage > 1){
            this.setState({
                currentPage: this.state.currentPage - 1,
            }, function () {
                this.props.getMovies(this.state.currentPage);
            }.bind(this));
        }
    }

    goToNext = () => {
        const { currentPage, total_pages } = this.state;
        if(currentPage < total_pages){
            this.setState({
                currentPage: this.state.currentPage + 1,
            }, function () {
                this.props.getMovies(this.state.currentPage);
            }.bind(this));
        }
    }

    getMoviesByPage = () => {
        const { currentPage } = this.state;
        this.props.getMovies(currentPage);
    }

    render() {
        const { allMovies } = this.props;
        const status = _get(allMovies, 'status', '');
        const { currentPage, total_pages } = this.state;
        return (
            <MainView>
                <MoviesBox>
                    {this.showMovieStatus(allMovies)}
                </MoviesBox>
                <PaginationBox>
                        <div className="pagination">
                            <button className={(currentPage === 1) ? 'disabled' : ''} onClick={this.goToPrev}>&laquo;</button>
                            <button className='currentpage' >{status === 'success' ? currentPage : <i className="fas fa-spinner"></i>}</button>
                            <button className={(currentPage === total_pages) ? 'disabled' : ''}  onClick={this.goToNext}>&raquo;</button>
                        </div>
                </PaginationBox>
            </MainView>
        )
    }
}

export default Dashboard;