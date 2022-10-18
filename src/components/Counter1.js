import {DEC, INC, RESET, SET, useReducer1} from "../reducers";

const Counter1 = () => {

    const [state, dispatch] = useReducer1();

    return (
        <div>
            <h1>Counter 1 : {state.counter1}</h1>
            <button onClick={() => dispatch({type: INC})}>INC</button>
            <button onClick={() => dispatch({type: DEC})}>DEC</button>
            <button onClick={() => dispatch({type: RESET})}>RESET</button>
            <button onClick={() => dispatch({type: SET,payload:10})}>SET</button>

        </div>
    );
}

export {Counter1}