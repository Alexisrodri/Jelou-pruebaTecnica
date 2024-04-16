import { Book } from "../interfaces/books";
import { setData, addFavoriteBook, removeFavoriteBook } from "../slice/slice";
import { useAppDispatch } from "./store"

export const BooksActions = () => {

  const dispatch = useAppDispatch();

  const setDataBook = (book: Book[]) => {
    dispatch(setData(book))
  }

  const setFavoriteBook = (book: Book) => {
    dispatch(addFavoriteBook(book))
  }

  const setRemoveBook = (bookId: string) => {
    dispatch(removeFavoriteBook(bookId))
  }

  return { setDataBook, setFavoriteBook, setRemoveBook }
}