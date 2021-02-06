import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

const persistConfig = {
	key: "root",
	storage,
	stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const persistedStore = () => {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	let store = createStore(
		persistedReducer,
		composeEnhancers(applyMiddleware(thunk)),
	);
	let persistor = persistStore(store);
	return { store, persistor };
};

export default persistedStore;
