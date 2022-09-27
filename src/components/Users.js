import {useEffect, useState} from "react";

import {UserService} from "../services/user.service";

import {User} from "./User";

import {UserDetails} from "./UserDetails";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    const lift = (obj) => {
        setUser(obj);
    }

    useEffect(() => {
        UserService.getUsers().then(value => setUsers(value.data))
    }, [])

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} lift={lift}/>)
            }
            {
                user && <UserDetails key={user.id} user={user}/>
            }
        </div>
    );
}
export {Users};