import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

// import {postsService} from "../../services";
import {postActions} from "../../redux";
import {Post} from "../Post/Post";

const Posts = () => {

    let dispatch = useDispatch();

    let {posts, error, loading, currentPost} = useSelector(state => state.postReducer);

    useEffect(() => {
        // postsService.getAll().then(({data}) => dispatch(postActions.getAll(data)))
        dispatch(postActions.getAll())
    }, [dispatch])

    return (
        <div>
            <h1>Posts</h1>
            {loading && <h1>Loading......</h1>}
            {error && <h1>Errrrror!</h1>}
            {currentPost &&
                <div>
                    <h2>{currentPost.id}</h2>
                    <h3>{currentPost.title}</h3>
                    <p>{currentPost.body}</p>
                </div>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}

export {Posts}