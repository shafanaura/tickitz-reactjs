import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const persistedStore = () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
  let persistor = persistStore(store);
  return { store, persistor };
};

export default persistedStore;
