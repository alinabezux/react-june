import {useEffect, useState} from "react";

const Users = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null);

    const lift = (obj) => {
        setUser(obj);
    }
    useEffect(()=>{

    })

    return (
        <div>

        </div>
    );
}