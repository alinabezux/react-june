const Comment = ({comment}) => {
    return (
        <div>
            <h3>{comment.name}</h3>
            <h4>{comment.email}</h4>
            <p>{comment.body}</p>
        </div>
    );
}

export {Comment}