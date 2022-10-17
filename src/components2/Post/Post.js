import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {MyContext} from "../../index";

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();
    const context = useContext(MyContext);

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={() => navigate(`${id}`, {state: {...post}})}>PostDetail</button>
            <button onClick={() => context.post = post}>Save</button>
        </div>
    );
};

export {Post};