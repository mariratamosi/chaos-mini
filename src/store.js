import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { loggerMiddleware } from "./addOns/logger_";

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWareEnhancer = composeEnchancer(
  applyMiddleware(thunk, loggerMiddleware)
);

const store = createStore(rootReducer, middleWareEnhancer);

export default store;
