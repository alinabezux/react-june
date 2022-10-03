import {useEffect, useState} from "react";

import {usersService} from "../services";
import User from "./user";
import {UserForm} from "./userForm";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getUsers().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            <div><UserForm setUsers={setUsers}/></div>
            <div>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
        </div>
    )
}

export {Users};