import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {Post} from "./Post";

const Posts = () => {

    const {postId} = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
            .then(value => value.json())
            .then(value => setPost({...value})
            )
    }, [postId])


    return (
        <div>
            {
                post && (<Post key={post.id} post={post}/>)
            }
        </div>
    );
}

export {Posts}