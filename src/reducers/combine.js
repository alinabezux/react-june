import {combineReducers, createStore} from "redux";

import {commentsReducer} from "./commentsReducer";
import {postsReducer} from "./postsReducer";
import {usersReducer} from "./usersReducer";


const reducer = combineReducers({
    commentsReducer,
    postsReducer,
    usersReducer
});


export {
    reducer
}