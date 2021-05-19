import calculateReducer from "../reducers/calculateReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  calculator: calculateReducer,
});

export default rootReducer;
