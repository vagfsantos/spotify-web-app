import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const middlewares = applyMiddleware(thunk);

const store = createStore(reducers, middlewares);

export default store;
