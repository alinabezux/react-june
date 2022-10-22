import {LOAD_POSTS} from "./actions";

const postsReducer = (state = {posts: []}, {type, payload}) => {
    switch (type) {
        case LOAD_POSTS:
            return {...state, posts: payload}
        default:
            return state
    }
}

export {postsReducer}