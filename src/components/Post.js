const Post = ({post}) => {

    return (
        <div>
            <hr/>
            <h1>POST</h1>
            <h2>{post.id} -- {post.title}</h2>
            <p>{post.body}</p>
            <hr/>

        </div>
    );
}


export {Post}