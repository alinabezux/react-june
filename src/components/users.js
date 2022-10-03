import {useEffect, useState} from "react";

import {usersService} from "../services";
import {User} from "./user";

const Users = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        usersService.getUsers().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
}

export {Users}