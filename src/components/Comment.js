import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    return (
        <div>
            <Link to={comment.postId.toString()}><h3>{comment.name}</h3></Link> <h3><i>{comment.email}</i></h3>
            <p>{comment.body}</p>
            <hr/>

        </div>
    );
}

export {Comment}