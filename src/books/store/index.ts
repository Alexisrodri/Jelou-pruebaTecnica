
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from '../slice/slice';

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action);

  const state = {
    data: store.getState().books.data,
    favoriteBooks: store.getState().books.favoriteBooks
  };

  localStorage.setItem('_redux_state_book', JSON.stringify(state));
};

export const store = configureStore({
  reducer: {
    books: booksReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistanceLocalStorageMiddleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
