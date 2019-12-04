import * as ActionTypes from './actionTypes';

export const leaders = (state = {
    errorMessage: null, isLoading: true, leaders: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return {...state, errorMessage: null, isLoading: false, leaders: action.payload};
        case ActionTypes.LEADERS_FAILED:
            return {...state, errorMessage: action.payload, isLoading: false, leaders: []};
        case ActionTypes.LEADERS_LOADING:
            return {...state, errorMessage: null, isLoading: true, leaders: []};
        default:
            return state;
    }
};