import * as ActionTypes from './actionTypes';

export const promotions = (state = {
    errorMessage: null, isLoading: true, promotions: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOS:
            return {...state, errorMessage: null, isLoading: false, promotions: action.payload};
        case ActionTypes.PROMOS_FAILED:
            return {...state, errorMessage: action.payload, isLoading: false, promotions: []};
        case ActionTypes.PROMOS_LOADING:
            return {...state, errorMessage: null, isLoading: true, promotions: []};
        default:
            return state;
    }
};