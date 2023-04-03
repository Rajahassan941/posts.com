import axios from "axios";
import { FAIL, SUCCESS } from "../constants/PostConstants";

export const PostListAction = () => async (dispatch) => {
    try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch({
            type: SUCCESS,
            payload: result.data
        })

    } catch (error) {
        dispatch(
            {
                type: FAIL,
                error: error
            }
        )
    }

}