import {createStore, applyMiddleware, combineReducers} from "redux";
import {createLogicMiddleware} from 'redux-logic';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from '../store/Reducers';
import manager from '../store/Managers';

const persistConfig = {
  key: 'root',
  storage,
};

let persistor;
const rootReducer = combineReducers(reducer);
const logicMiddleware = createLogicMiddleware(manager);
const middleware = applyMiddleware(logicMiddleware);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  middleware,
)
persistor = persistStore(store);

export {store, persistor};