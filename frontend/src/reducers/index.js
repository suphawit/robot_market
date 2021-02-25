import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import getRobotListReducer from "./getRobotListReducer";

export default function getRootReducer() {
  return combineReducers({
    cartReducer,
    getRobotListReducer,
  });
}
