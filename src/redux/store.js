import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducers from "./reducers/auth-reducers";
import contentReducers from "./reducers/main-content-reducer";


const rootReducer = combineReducers({
    auth: authReducers,
    events: contentReducers,

})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))