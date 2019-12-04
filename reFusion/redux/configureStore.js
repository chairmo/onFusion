import {combineReducers, createStore, applyMiddleware} from "redux";
import {dishes} from './dishes';
import {promotions} from "./promotions";
import {leaders} from "./leaders";
import {comments} from "./comments";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import {favorites} from "./favorites";


export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        dishes,
        leaders,
        promotions,
        comments,
        favorites
    }), applyMiddleware(thunk, logger));

    return store;
};