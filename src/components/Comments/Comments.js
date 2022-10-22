import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {commentsService} from "../../services";
import {Comment} from "./Comment";
import {LOAD_COMMENTS} from "../../reducers";

const Comments = () => {

    const {comments} = useSelector(state => state.commentsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        commentsService.getAll().then(({data}) => dispatch({type: LOAD_COMMENTS, payload: data}))
    }, [dispatch])

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
}

export {Comments}