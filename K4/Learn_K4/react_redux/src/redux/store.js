import { combineReducers, legacy_createStore as createStore, applyMiddleware} from 'redux';
import {counterReducer, todoReducer, postReducer} from './reducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from 'redux-thunk'

const rootReducer= combineReducers({
    counter: counterReducer,
    todos: todoReducer,
    posts: postReducer,
})

export const store= createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
