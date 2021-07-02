import employeesReducer from "./employeesReducer";
import employeReducer from "./employeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  employees: employeesReducer,
  employe: employeReducer,
});

export default rootReducer;
