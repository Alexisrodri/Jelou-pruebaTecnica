import { useEffect } from 'react';
import './App.css'
import { useBooks } from './books/hooks/useBooks'
import BooksCard from './books/components/booksCard';
import { BooksActions } from './books/hooks/booksActions';
import { loadPersistedState, setDataFavoriteBooks } from './books/slice/slice';

function App() {
  const { books } = useBooks();
  const { setDataBook } = BooksActions();

  useEffect(() => {
    const persistedState = loadPersistedState();

    if (Array.isArray(persistedState?.data) && persistedState.data.length > 0) {
      setDataBook(persistedState.data);
    } else {
      setDataBook(books);
    }

    if (Array.isArray(persistedState?.favoriteBooks) && persistedState.favoriteBooks.length > 0) {
      setDataFavoriteBooks(persistedState.favoriteBooks);
    }
  }, [setDataBook, books]);
  return (
    <>
      <BooksCard />
    </>
  )
}

export default App

