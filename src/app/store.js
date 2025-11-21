import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/books/bookSlice';

const loadState = () => {
  try {
    const s = localStorage.getItem('books_state_v1');
    return s ? JSON.parse(s) : undefined;
  } catch {
    return undefined;
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('books_state_v1', JSON.stringify(state));
  } catch {}
});

export default store;
