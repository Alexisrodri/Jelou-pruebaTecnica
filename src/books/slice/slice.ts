import { createSlice } from "@reduxjs/toolkit";
import { Books } from "../interfaces/books";

interface books {
  books: Books
}

const initialState: books[] = []

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {}
})

export default booksSlice.reducer;