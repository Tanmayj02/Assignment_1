import { combineReducers } from "redux";
import { userListReducer } from "./DeleteUser";

const rootReducer = combineReducers({ users: userListReducer });

export default rootReducer;
