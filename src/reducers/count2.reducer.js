import {useReducer} from "react";

import {DEC, INC, RESET, SET} from "./count.actions";

const reducer = (state, action) => {
    switch (action.type) {
        case INC:
            return {counter2: state.counter2 + 1}
        case DEC:
            return {counter2: state.counter2 - 1}
        case RESET:
            return {counter2: 0}
        case SET:
            return {counter2: action.payload}
        default:
            return state
    }
}

const useReducer2 = () => useReducer(reducer, {counter2: 0});

export {useReducer2}