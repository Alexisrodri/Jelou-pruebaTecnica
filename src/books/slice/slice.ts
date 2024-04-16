import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../interfaces/books';

interface InitialState {
  data: Book[];
  favoriteBooks: Book[];
}

const initialState: InitialState = {
  data: [],
  favoriteBooks: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Book[]>) => {
      state.data = action.payload;
    },
    removeFavoriteBook: (state, action: PayloadAction<string>) => {
      state.favoriteBooks = state.favoriteBooks.filter(
        (book) => book.ISBN !== action.payload
      );
    },
    addFavoriteBook: (state, action: PayloadAction<Book>) => {
      state.favoriteBooks.push(action.payload);
    },
  },
});

export default booksSlice.reducer;
export const { removeFavoriteBook, addFavoriteBook, setData } = booksSlice.actions;
