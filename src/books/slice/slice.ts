import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../interfaces/books';

const default_state = {
  data: [],
  favoriteBooks: [],
}

interface InitialState {
  data: Book[];
  favoriteBooks: Book[];
}

export const loadPersistedState = (): InitialState | null => {
  try {
    const serializedState = localStorage.getItem('_redux_state_book');

    if (serializedState === null) {
      return null;
    }

    return JSON.parse(serializedState) as InitialState;
  } catch (error) {
    console.log('Error loading persisted state:', error);
    return null;
  }
};

const initialState: InitialState = (() => {
  const persistedState = loadPersistedState();

  if (persistedState) {
    return persistedState;
  }

  return default_state;
})();

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Book[]>) => {
      state.data = action.payload;
    },
    setDataFavoriteBooks: (state, action: PayloadAction<Book[]>) => {
      state.favoriteBooks = action.payload;
    },
    removeFavoriteBook: (state, action: PayloadAction<string>) => {
      state.favoriteBooks = state.favoriteBooks.filter(
        (book) => book.ISBN !== action.payload
      );
      localStorage.setItem('_redux_state_book', JSON.stringify(state));
    },
    addFavoriteBook: (state, action: PayloadAction<Book>) => {
      state.favoriteBooks.push(action.payload);
      localStorage.setItem('_redux_state_book', JSON.stringify(state));
    },
  },
},
);

export default booksSlice.reducer;
export const { removeFavoriteBook, addFavoriteBook, setData, setDataFavoriteBooks } = booksSlice.actions;
