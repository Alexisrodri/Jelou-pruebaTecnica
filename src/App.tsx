import { useEffect } from 'react';
import './App.css'
import { useBooks } from './books/hooks/useBooks'
import BooksCard from './books/components/booksCard';
import { logoLetter, menuOpen, search } from './public/images';

function App() {

  const pruebas = useBooks();
  console.log(pruebas);

  useEffect(() => {
    pruebas
  })

  return (
    <>
      <nav className="text-black p-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">

          <div className='flex items-center sm:hidden'>
            <button>
              <img src={menuOpen} />
            </button>
          </div>

          <img src={logoLetter} alt="Librería" className="h-20 hidden sm:block" />

          <div className="flex-1 justify-center items-center flex-grow ml-5 sm:flex-1 sm:ml-4 relative">
            <div className="flex items-center bg-gray-100 p-2 rounded w-full sm:w-auto">
              <input
                type="text"
                placeholder="Buscar libros"
                className="bg-transparent text-black placeholder-gray-400 focus:outline-none w-full "
              />
              <img src={search} className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

      </nav >
      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {pruebas.books?.library.map((book, index) => (
          <BooksCard key={index} book={book.book} />
        ))}
      </section>
    </>
  )
}

export default App
