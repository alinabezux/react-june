import User from "./user";
import {useState} from "react";

export default function Users() {
let [users, setUsers] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            setUsers(value);
        });


    return (
        <div>
            {
                users.map(user => (<User user={user} key={user.id}/>))
            }
        </div>
    );
}