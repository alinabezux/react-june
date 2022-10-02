import './App.css'
import {Posts, Users} from "./components";
import {useState} from "react";
import {postsService} from "./services";


function App() {
    const [posts, setPosts] = useState([])
    const getUserId = (id) => {
        postsService.getPosts(id).then(({data}) => setPosts(data))

    }
    return (
        <div>
            <Users getUserId={getUserId}/>
            <Posts posts={posts}/>
        </div>);
}

export default App;