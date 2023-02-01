import {legacy_createStore, applyMiddleware, combineReducers} from "redux";
import { reducer as bookReducer } from "./Books/reducer";
import { reducer as authReducer} from "./Authentication/reducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({bookReducer, authReducer});

 export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));