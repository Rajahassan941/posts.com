import { FAIL, SUCCESS } from "../constants/PostConstants"



export const PostListReducer = (state = { PostList: [] }, action) => {
    switch (action.type) {
        case SUCCESS:
            return { PostList: action.payload }
        case FAIL:
            return { PostList: action.error }
        default:
            return state
    }
}