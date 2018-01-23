import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { items, navigation, authentication } from "./reducers";

const args = global.__DEV__ ? [logger, thunk] : [thunk];
const middleware = applyMiddleware(...args);

export default function store() {
  return createStore(
    combineReducers({
      authentication: authentication,
      navigation: navigation,
      items: items
    }),
    middleware
  );
}
