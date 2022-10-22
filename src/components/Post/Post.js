import {useDispatch} from "react-redux";

import {postActions} from "../../redux";

const Post = ({post}) => {
    let dispatch = useDispatch();
    const {id, title} = post;
    return (
        <div>
            <h3>{id} - {title}</h3>
            <button onClick={() => dispatch(postActions.getCurrentPost({id}))}>get post</button>
            <button onClick={() => dispatch(postActions.deleteById({id}))}>Delete post</button>
        </div>
    );
}

export {Post}