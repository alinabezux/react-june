import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {useEffect} from "react";

import {ChosenUserDetails} from "../ChosenUserDetails/ChosenUserDetails";
import {CHOOSE_USER} from "../../reducers";

const ChosenUser = () => {

    const {user} = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch({type: CHOOSE_USER, payload: +id})
    }, [dispatch,id])

    return (
        <div>
            {
                user && (<ChosenUserDetails user={user}/>)
            }
        </div>
    );
}

export {ChosenUser}