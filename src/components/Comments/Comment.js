const Comment = ({comment}) => {
    return (
        <div>
            <h3>{comment.name} -- <i>{comment.email}</i></h3>
            <p>{comment.body}</p>
        </div>
    );
}

export {Comment}