import {CHOOSE_USER, LOAD_USERS} from "./actions";

const usersReducer = (state = {users: [], user: null}, {type, payload}) => {
    switch (type) {
        case LOAD_USERS:
            return {...state, users: payload}
        case CHOOSE_USER:
            return {...state, user: state.users.find(value => value.id === payload)}
        default:
            return {...state}
    }
}

export {usersReducer}