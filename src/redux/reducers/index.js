import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import authReducer from "./auth";
import movieReducer from "./movie";
import genreReducer from "./genre";
import showtimeReducer from "./showtime";
import orderReducer from "./order";
import userReducer from "./user";

const authConfig = {
  key: "authReducer",
  storage,
  stateReconciler: hardSet,
};

const reducer = combineReducers({
  user: userReducer,
  auth: persistReducer(authConfig, authReducer),
  movie: movieReducer,
  genre: genreReducer,
  showtime: showtimeReducer,
  order: orderReducer,
});

export default reducer;
