import { Book } from "../interfaces/books";
import { setData } from "../slice/slice";
import { useAppDispatch } from "./store"

export const BooksActions = () => {

  const dispatch = useAppDispatch();

  const setDataBook = (book: Book[]) => {
    dispatch(setData(book))
  }

  return { setDataBook }
}