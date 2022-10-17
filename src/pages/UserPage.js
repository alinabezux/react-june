import {useContext} from "react";
import {MyContext} from "../index";

const UserPage = () => {
    const context = useContext(MyContext);

    const show = () => {
        console.log('show');
    }

    return (
        <div>
            UserPage

            {JSON.stringify(context)}
            <button onClick={() => show()}>my text</button>
        </div>
    );
};

export {UserPage};