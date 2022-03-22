import { todosReducer } from './todosReducer';
import { combineReducers, createStore } from "redux";

export const rootReducer = combineReducers({
    todos: todosReducer
})

export const store = createStore(rootReducer)


