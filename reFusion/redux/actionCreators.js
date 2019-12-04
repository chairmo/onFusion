import * as ActionTypes from "./actionTypes";
import {baseUrl} from "../shared/baseUrl";

/** USING FETCH API TO GET DATA FROM THE SERVER  */

export const fetchDishes = () => (dispatch) => {
    dishesLoading(dispatch);

    return fetch(baseUrl + 'dishes')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let errMess = new Error('Error ' + response.status + ' : ' + response.statusText);
                    errMess.response = response;
                    throw errMess;
                }
            },
            error => {
                let err = new Error(error.message);
                throw error;
            })
        .then((response) => response.json())
        .then((dishes) => dispatch(addDishes(dishes)))
        .catch((err) => dispatch(dishes_failed(err.message)))
};

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const dishes_failed = (errMess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess
});


export const fetchLeaders = () => (dispatch) => {
    leadersLoading(dispatch);

    return fetch(baseUrl + 'leaders')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let errMess = new Error('Error ' + response.status + ' : ' + response.statusText);
                    errMess.response = response;
                    throw errMess;
                }

            },
            error => {
                let err = new Error(error.message);
                throw error;
            }
        )
        .then((response) => response.json())
        .then((leaders) => dispatch(addLeaders(leaders)))
        .catch((err) => dispatch(leaders_failed(err.message)))
};

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const leaders_failed = (errMess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errMess
});


export const fetchPromotions = () => (dispatch) => {
    promosLoading(dispatch);

    return fetch(baseUrl + 'promotions')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var errMess = new Error('Error ' + response.status + ' : ' + response.statusText);
                    errMess.response = response;
                    throw errMess;
                }

            },
            error => {
                var err = new Error(error.message);
                throw error;
            }
        )
        .then((response) => response.json())
        .then((promos) => dispatch(addPromotions(promos)))
        .catch((err) => dispatch(promos_failed(err.message)))
};

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const addPromotions = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const promos_failed = (errMess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMess
});


export const fetchComments =() => (dispatch) => {

    return fetch(baseUrl + 'comments')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var errMess = new Error('Error ' + response.status + ' : ' + response.statusText);
                    errMess.response = response;
                    throw errMess;
                }

            },
            error => {
                var err = new Error(error.message);
                throw error;
            }
        )
        .then((response) => response.json())
        .then((comments) => dispatch(addComments(comments)))
        .catch((err) => dispatch(comments_failed(err.message)))
};


export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const comments_failed = (errMess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});


export const postFavorites = (dishId) => (dispatch) => {
    setTimeout(() => dispatch(addFavorite(dishId)), 2000);
};

export const addFavorite = (dishId) => {
    return ({
        type: ActionTypes.ADD_FAVORITES,
        payload: dishId
    })
};