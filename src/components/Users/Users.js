import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {usersService} from "../../services";
import {LOAD_USERS} from "../../reducers";
import {User} from "./User";


const Users = () => {

    const {users} = useSelector(state => state.usersReducer);

    let dispatch = useDispatch();

    useEffect(() => {
        usersService.getAll().then(({data}) => dispatch({type: LOAD_USERS, payload: data}))
    }, [dispatch])

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
}


export {Users}