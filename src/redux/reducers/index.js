import { combineReducers } from "redux";
import authReducer from "./auth";

const reducer = combineReducers({
	auth: authReducer,
});

export default reducer;
