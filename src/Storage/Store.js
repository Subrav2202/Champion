import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import Reducer from "./Reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const perReducer = persistReducer(persistConfig, Reducer)
const store = createStore(perReducer, composeWithDevTools(applyMiddleware(thunk)));
const perStore = persistStore(store)

export { perStore,store };