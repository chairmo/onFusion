import * as ActionTypes from './actionTypes';

export const dishes = (state = {
    errorMessage: null, isLoading: true, dishes: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, errorMessage: null, isLoading: false, dishes: action.payload};
        case ActionTypes.DISHES_FAILED:
            return {...state, errorMessage: action.payload, isLoading: false, dishes: []};
        case ActionTypes.DISHES_LOADING:
            return {...state, errorMessage: null, isLoading: true, dishes: []};
        default:
            return state;
    }
};