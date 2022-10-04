import {useEffect, useState} from "react";

import {commentsService} from "../services";
import {Comment} from "./comment";
import {CommentForm} from "./commentForm";

const Comments = () => {

    const [comments, setComments] = useState([])
    useEffect(() => {
        commentsService.getComments().then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            <div>
                <CommentForm setComments={setComments}/>
            </div>

            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
}

export {Comments}