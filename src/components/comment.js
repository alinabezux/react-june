const Comment = ({comment}) => {

    return (
        <div>
            <h2>{comment.name}</h2>
            <h4>{comment.email}</h4>
            <p>{comment.body}</p>
            <hr/>
        </div>
    );
}

export {Comment}