import * as ActionTypes from './actionTypes';


export const favorites = (state =[], action) => {
    switch(action.type) {
        case ActionTypes.ADD_FAVORITES:
            if (state.some(el => el === action.payload)){
                return state;
            }
            return state.concat(action.payload);

        default: return state;
    }
};