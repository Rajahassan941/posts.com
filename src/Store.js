import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { PostListReducer } from "./reducers/PostReducers";


//reducer
const reducers = combineReducers({
    PostReducer:PostListReducer          
})

//Middleware
const Middleware = [thunk]

//create store
const store = createStore(reducers, applyMiddleware(...Middleware))



export default store;