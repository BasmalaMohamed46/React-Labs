import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer.js";

export default combineReducers({
    Users:UsersReducer
})