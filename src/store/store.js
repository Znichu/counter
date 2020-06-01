import {combineReducers, createStore} from "redux";
import CounterReducer from "./counter-reducer";


let rootReducer = combineReducers(
    {
        counter: CounterReducer
    }
);


let store = createStore (rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;