import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import productReducer from "./reducer/productReducer";

export const store = createStore(combineReducers({
    product: productReducer,

}), composeWithDevTools(applyMiddleware(thunk)))

export default store

// thunk - он нужен для асинхронных запросов на бэк