import {createContext, useContext, useEffect} from "react";
import {MyContext} from "../index";
import {postService} from "../services/post.service";
import {useAuth} from "../hooks/useAuth";

const AboutPage = () => {
    // const context = useContext(MyContext);
    //
    // useEffect(() => {
    //     postService.getById(3).then(({data}) => Object.assign(context, data))
    // }, [context])

    const {logOut} = useAuth();
    return (
        <div>
            AboutPage
            {/*<h1>{context.name}</h1>*/}
            {/*<h1>{context.age}</h1>*/}
            {/*{context.post && <h1>{JSON.stringify(context.post)}</h1>}*/}
            <button onClick={() => logOut(() => console.log('you are out'))}>Log Out</button>

        </div>
    );
};

export {AboutPage};