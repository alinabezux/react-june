const Post = ({post}) => {
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr/>
        </div>
    );
}

export {Post}