import './App.css'
import {Route, Routes} from "react-router-dom"

import {MainPage} from "./components/MainPage";
import {Todos} from "./components/Todos";
import {Albums} from "./components/Albums";
import {Comments} from "./components/Comments";
import {Posts} from "./components/Posts";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainPage/>}>
                    <Route path={'/todos'} element={<Todos/>}/>
                    <Route path={'/albums'} element={<Albums/>}/>
                    <Route path={'/comments'} element={<Comments/>}>
                        <Route path={':postId'} element={<Posts/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App;