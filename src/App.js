import './App.css'
// import {ClassComponent} from "./components/ClassComponent";
import {useState} from "react";
import {FunctionComponent} from "./components/FunctionComponent";

function App() {

    const [flag, setFlag] = useState(true);
    return (
        <div>
            {flag && <FunctionComponent name='max'/>}
            <button onClick={() => setFlag(prev => !prev)}>Hide</button>
        </div>
    )
}

export default App;