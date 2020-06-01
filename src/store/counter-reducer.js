const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const RESET_COUNTER = "RESET_COUNTER";
const SAVE_SETTINGS = "SAVE_SETTINGS";
const UPDATE_MAX = "UPDATE_MAX";
const UPDATE_START = "UPDATE_START";

let initialsState = {
    counter: 0,
    max: 5,
    start: 0,
    validated: true
};


const CounterReducer = (state = initialsState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER: {
            return {
                ...state,
                counter: state.counter +1
            }
        }
        case RESET_COUNTER: {
            return {
                ...state,
                counter: state.start
            }
        }
        case SAVE_SETTINGS: {
            return {
                ...state,
                counter: state.start,
                validated: true
            }
        }
        case UPDATE_MAX: {
            return {
                ...state,
                max: action.inputValue,
                validated: false
            }
        }
        case UPDATE_START: {
            return {
                ...state,
                start: action.inputValue,
                validated: false
            }
        }
        default: return state;
    }
};

export const increment = () => ({type: INCREMENT_COUNTER});
export const reset = () => ({type: RESET_COUNTER});
export const saveSettings = () => ({type: SAVE_SETTINGS});
export const updateMax = (inputValue) => ({type: UPDATE_MAX, inputValue});
export const updateStart = (inputValue) => ({type:UPDATE_START, inputValue});

export default CounterReducer;