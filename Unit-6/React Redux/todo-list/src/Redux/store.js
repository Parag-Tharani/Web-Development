import { legacy_createStore as createStore, combineReducers } from "redux";
import { TodoReducer } from "./Todo/reducer";
import { LogReducer } from "./Login/reducer";

const rootReducer = combineReducers({
    todos: TodoReducer,
    logedIn: LogReducer
})

export const store = createStore(rootReducer);