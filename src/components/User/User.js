import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

const User = ({user}) => {

    const dispatch = useDispatch();

    const {id, name, username, email} = user;

    return (
        <div>
            <h3>{id}</h3>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <button onClick={() => dispatch(userActions.setCurrentUser(user))}>Select user</button>
            <button onClick={() => dispatch(userActions.getById({id}))}>get from API</button>
            <button onClick={() => dispatch(userActions.deleteById(id))}>Delete</button>
        </div>
    );
}

export {User}