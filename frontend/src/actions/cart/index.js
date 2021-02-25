import { addToCartLog, deleteToCartLog } from "./cart";

export const addToCart = (robot) => {
  return (dispatch) => {
    dispatch(addToCartLog(robot));
  };
};

export const deleteToCart = (name) => {
  return (dispatch) => {
    dispatch(deleteToCartLog(name));
  };
};
