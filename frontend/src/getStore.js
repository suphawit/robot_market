import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import getRootReducer from "./reducers";

let middleware = [thunk];

// if(process.env.NODE_ENV === 'dev') {
//   const { logger } = require('redux-logger');

//   middleware = [...middleware, logger];
// }

export default function getStore() {
  // const store = createStore(getRootReducer(), undefined, applyMiddleware(loggerMiddleWare));
  const routeReducer = getRootReducer();
  const store = createStore(routeReducer, {}, applyMiddleware(...middleware));
  return store;
}
