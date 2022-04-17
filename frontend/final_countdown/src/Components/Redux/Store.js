import { createStore } from "redux";
import { LoginReducer } from "./Loginreducer";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
const rootReducer= combineReducers({
     login:LoginReducer
})
export const store= createStore(rootReducer,applyMiddleware(thunk))