import { combineReducers } from "redux";
import authReducer from "./auth";
import movieReducer from "./movie";
import genreReducer from "./genre";
import showtimeReducer from "./showtime";
import orderReducer from "./order";
import userReducer from "./user";

const reducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  movie: movieReducer,
  genre: genreReducer,
  showtime: showtimeReducer,
  order: orderReducer,
});

export default reducer;
