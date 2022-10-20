import './App.css'
import {useDispatch, useSelector} from "react-redux";

function App() {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>{state}</h2>
            <button onChange={dispatch({type: 'INC', payload: 1})}>increment</button>
            <button onChange={dispatch({type: 'DEC', payload: 1})}>decrement</button>
        </div>
    )
}

export default App;