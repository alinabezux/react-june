import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postsService} from "../../services";
import {Post} from "./Post";
import {LOAD_POSTS} from "../../reducers";

const Posts = () => {

    const {posts} = useSelector(state => state.postsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        postsService.getAll().then(({data}) => dispatch({type: LOAD_POSTS, payload: data}))
    }, [dispatch])

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
}

export {Posts}