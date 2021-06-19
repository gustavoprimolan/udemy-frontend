import { combineReducers } from "redux";
import postReducer from "./postsReducer";
import usersReducers from "./usersReducer";

export default combineReducers({ posts: postReducer, users: usersReducers });
