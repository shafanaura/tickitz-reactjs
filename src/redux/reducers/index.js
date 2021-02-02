import { combineReducers } from "redux";
import authReducer from "./auth";
import movieReducer from "./movie";
import genreReducer from "./genre";

const reducer = combineReducers({
	auth: authReducer,
	movie: movieReducer,
	genre: genreReducer,
});

export default reducer;
