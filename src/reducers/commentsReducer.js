import {LOAD_COMMENTS} from "./actions";

const commentsReducer = (state = {comments: []}, {type, payload}) => {
    switch (type) {
        case LOAD_COMMENTS:
            return {...state, comments: payload}
        default:
            return {...state}
    }
}


export {commentsReducer}