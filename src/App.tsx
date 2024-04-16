import { useEffect } from 'react';
import './App.css'
import { useBooks } from './books/hooks/useBooks'
import BooksCard from './books/components/booksCard';
import { BooksActions } from './books/hooks/booksActions';

function App() {
  const { books } = useBooks();
  const { setDataBook } = BooksActions();

  useEffect(() => {
    if (books) {
      setDataBook(books)
    }
  })

  return (
    <>
      <BooksCard />
    </>
  )
}

export default App

