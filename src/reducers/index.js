import calculateReducer from "../reducers/calculateReducer";
import loginReducer from "../reducers/loginReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: loginReducer,
});

export default rootReducer;
