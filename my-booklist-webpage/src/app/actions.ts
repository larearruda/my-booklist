import {createReducer} from '@reduxjs/toolkit';
import { Book } from '../model/book';

const INITIAL_STATE: Book[] = [];

const reducer = createReducer(INITIAL_STATE, {
  SET_BOOKS_LIST: (state, action) => {
    let ordered:Book[] = [];
    let doing = action.payload.filter((d: Book) => d.status === 'doing');
    let todo = action.payload.filter((d: Book) => d.status === 'todo');
    let done = action.payload.filter((d: Book) => d.status === 'done');
    ordered = ordered.concat(doing, todo, done);
    return ordered;
  },
});


export default reducer;