import * as ActionTypes from './actionTypes';

export const comments = (state = {
    errorMessage: null, comments: []
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_COMMENTS:
            return {...state, errorMessage: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errorMessage: action.payload, comments: []};

        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.comments.length;
            console.log(comment + " " + state.comments.length);
            return {...state, comments: state.comments.concat(comment)};

        default:
            return state;
    }
};