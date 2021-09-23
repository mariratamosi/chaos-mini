// import calculateReducer from "redux/reducers/calculateReducer";
import loginReducer from "redux/reducers/loginReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: loginReducer,
});

export default rootReducer;
