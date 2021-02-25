import axios from "axios";
import {
  requestRobotListLog,
  failureRobotListLog,
  successRobotListLog,
} from "./robotList";

export const fetchRobotListLog = () => {
  return (dispatch) => {
    dispatch(requestRobotListLog());
    return axios
      .get("http://localhost:8000/api/robots")
      .then((response) => {
        dispatch(successRobotListLog(response.data.data));
      })
      .catch((error) => {
        dispatch(failureRobotListLog(error));
      });
  };
};
