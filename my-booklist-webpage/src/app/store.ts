import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import booksReducer from './actions';

const rootReducer = combineReducers({
    booksReducer,
});

export default function configureStore() {
    const middlewares: any[] = [thunk];
    return createStore(rootReducer, applyMiddleware(...middlewares));
  }