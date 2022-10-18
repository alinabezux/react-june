import './App.css'
import {useReducer} from "react";

const init = (initialValue) => {
    return {counter1: initialValue, counter2: initialValue}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc1':
            return {...state, counter1: state.counter1 + 1}
        case 'dec1':
            return {...state, counter1: state.counter1 - 1}
        case 'reset1':
            return {...state, counter1: 0}
        case 'set1':
            return {...state, counter1: action.payload}
        default:
            return {...state};
    }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, 0, init);

    return (
        <div>
            <h1>Counter1:{state.counter1}</h1>
            <h1>Counter2:{state.counter2}</h1>
            <button onClick={() => dispatch({type: 'inc1'})}>+</button>
            <button onClick={() => dispatch({type: 'dec1'})}>-</button>
            <button onClick={() => dispatch({type: 'reset1'})}>reset1</button>
            <button onClick={() => dispatch({type: 'set1', payload: 10})}>set 10 on 1</button>
        </div>
    )
}

export default App;