import {Header, Posts, Users} from "./components";
import './App.css'

function App() {
    return (
        <div>
            <Header/>
            <div>
                <Users/>
                <hr/>
                <Posts/>
            </div>
        </div>
    )
}

export default App;