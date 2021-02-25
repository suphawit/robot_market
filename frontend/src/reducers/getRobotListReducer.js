import {
  REQUEST_ROBOT_LIST_LOG,
  SUCCESS_ROBOT_LIST_LOG,
  FAILURE_ROBOT_LIST_LOG,
} from "../actions/robotList/types";

const GetRobotListReducer = (state, action) => {
  if (typeof state === "undefined") {
    state = {
      isRequested: "",
      payload: [],
      error: "",
    };
  }
  switch (action.type) {
    case REQUEST_ROBOT_LIST_LOG:
      return {
        ...state,
        isRequested: "OK",
      };
    case SUCCESS_ROBOT_LIST_LOG:
      return {
        ...state,
        payload: action.payload,
        isRequested: "DONE",
      };
    case FAILURE_ROBOT_LIST_LOG:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default GetRobotListReducer;
