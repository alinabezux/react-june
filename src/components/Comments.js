import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {Comment} from "./Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments([...value])
            })
    }, [])

    return (
        <div>
            <Outlet/>
            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
}

export {Comments}