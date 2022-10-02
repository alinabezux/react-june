import {Post} from "./post";

const Posts = ({posts}) => {
    return (
        <div>
            <h2><i>Posts</i></h2>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
}

export {Posts}