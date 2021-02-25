import _ from "lodash";
import { ADD_TO_CART_LOG, DELETE_TO_CART_LOG } from "../actions/cart/types";

const CartReducer = (state, action) => {
  if (typeof state === "undefined") {
    state = {
      payload: [],
    };
  }
  switch (action.type) {
    case ADD_TO_CART_LOG:
      let payload = [
        ...state.payload,
        {
          ...action.robot,
        },
      ];
      if (Object.keys(_.groupBy(payload, (r) => r.name)).length > 5) {
        alert("only allow to choose five type of robot");
        return {
          ...state,
        };
      }
      return {
        ...state,
        payload,
      };
    case DELETE_TO_CART_LOG:
      const deleteIndex = state.payload.findIndex(
        (r) => r.name === action.name
      );
      state.payload.splice(deleteIndex, 1);
      return {
        ...state,
        payload: state.payload,
      };
    default:
      return state;
  }
};

export default CartReducer;
