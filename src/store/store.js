import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import CounterReducer from "./counter-reducer";
import { save, load } from "redux-localstorage-simple"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(save())) (createStore);

let rootReducer = combineReducers(
    {
        counter: CounterReducer
    }
);

let store = createStoreWithMiddleware (rootReducer, load() );


export default store;