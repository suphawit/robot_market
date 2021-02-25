import { REQUEST_ROBOT_LIST_LOG, SUCCESS_ROBOT_LIST_LOG, FAILURE_ROBOT_LIST_LOG} from './types'

export const requestRobotListLog = () => {
  return {
    type: REQUEST_ROBOT_LIST_LOG
  }
}

export const successRobotListLog = (payload) => {
  return {
    type: SUCCESS_ROBOT_LIST_LOG,
    payload
  }
}

export const failureRobotListLog = (error) => {
  return {
    type: FAILURE_ROBOT_LIST_LOG,
    error
  }
}
