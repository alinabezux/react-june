import './App.css'
import {useReducer, useRef} from "react";

import {reducer} from "./PetsReducer";
import {Cat} from "./components";
import {Dog} from "./components";


const App = () => {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const dogRef = useRef();
    const catRef = useRef();

    const makeCat = () => {
        dispatch({type: 'makeCat', payload: catRef.current.value})
        catRef.current.value = ''
    }

    const makeDog = () => {
        dispatch({type: 'makeDog', payload: dogRef.current.value})
        dogRef.current.value = ''
    }

    return (
        <div className={'container'}>
            <div className={'cats'}>
                <h1>Cats</h1>
                <input type="text" placeholder={'enter cat`s name...'} ref={catRef}/>
                <button onClick={makeCat}>Save</button>
                <hr/>
                {
                    state.cats.map(cat => <Cat key={cat.id} cat={cat} dispatch={dispatch}/>)
                }
            </div>

            <div className={'dogs'}>
                <h1>Dogs</h1>
                <input type="text" placeholder={'enter dog`s name...'} ref={dogRef}/>
                <button onClick={makeDog}>Save</button>
                <hr/>
                {
                    state.dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)
                }

            </div>

        </div>
    )
}


export default App;