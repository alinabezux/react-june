import './App.css'
import {useReducer} from "react";

const reducer = (state, action) => {
    state = {...state, callCount: state.callCount + 1}

    switch (action.type) {
        case 'inc':
            return {...state, count: state.count + 1}
        case 'dec':
            return {...state, count: state.count - 1}
        case 'reset':
            return {...state, count: action.payload}
        default:
            return state
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0, callCount: 0});

    return (
        <div>
            <div>Count: {state.count}</div>
            <div>Call Count: {state.callCount}</div>
            <button onClick={() => dispatch({type: 'inc'})}>inc</button>
            <button onClick={() => dispatch({type: 'dec'})}>dec</button>
            <button onClick={() => dispatch({type: 'reset', payload: 0})}>reset</button>

        </div>
    )
}

export default App;