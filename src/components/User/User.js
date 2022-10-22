import {Link} from "react-router-dom";

const User = ({user}) => {
    return (
        <div>
            <h2><Link to ={user.id.toString()}>{user.name}</Link></h2>
        </div>
    );
}

export {User}