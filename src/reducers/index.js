import { combineReducers } from 'redux';
import {
    FETCH_ALL_MOVIES, LOGIN_PROCESS_LOADING,
    SUBMIT_PROCESS_LOADING, GET_LANGUAGE_OPTIONS,
} from '../actionTypes';

const allMovies = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_MOVIES:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
const loginResponse = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_PROCESS_LOADING:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

const submitUserResponse = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_PROCESS_LOADING:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

const allLanguages = (state = [], action) => {
    switch (action.type) {
        case GET_LANGUAGE_OPTIONS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default combineReducers({
    allMovies: allMovies,
    loginResponse: loginResponse,
    submitUserResponse: submitUserResponse,
    allLanguages: allLanguages
});