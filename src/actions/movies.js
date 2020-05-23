import {
    FETCH_ALL_MOVIES, GET_LANGUAGE_OPTIONS,
} from '../actionTypes';

export const fetchAllMovies = (status, data, languages) => ({
    type: FETCH_ALL_MOVIES,
    payload: { 'status': status, 'data': data}
});

export function getMovies(pageNo) {
    return dispatch => {
        dispatch(fetchAllMovies('loading'));
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=' + pageNo, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(response => {
                console.log(response);
                // getMovieLanguages(response);
                dispatch(fetchAllMovies('success', response));
            }).catch(error => {
                dispatch(fetchAllMovies('error', {}));
            })
    }
}

