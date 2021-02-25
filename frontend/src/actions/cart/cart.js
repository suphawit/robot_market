import { ADD_TO_CART_LOG, DELETE_TO_CART_LOG } from "./types";

export const addToCartLog = (robot) => {
  return {
    type: ADD_TO_CART_LOG,
    robot,
  };
};

export const deleteToCartLog = (name) => {
  return {
    type: DELETE_TO_CART_LOG,
    name,
  };
};
