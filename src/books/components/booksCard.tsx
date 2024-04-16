import { useState } from 'react';
import { logoLetter, menuOpen, search } from '../../public/images';
import { useAppSelector, useAppDispatch } from "../hooks/store";
import { addFavoriteBook, removeFavoriteBook } from '../slice/slice';
import { Book } from '../interfaces/books';

const generos = ['Terror', 'Ciencia ficción', 'Zombies', 'Fantasía'];
const autores = [
  'Mary Shelley',
  'H.P. Lovecraft',
  'Bram Stoker',
  'Stephen King',
  'Ray Bradbury',
  'William Gibson',
  'Douglas Adams',
  'Frank Herbert',
  'Manel Loreiro',
  'George Orwell',
  'J.K. Rowling',
  'George R. R. Martin',
  'J.R.R. Tolkien',
];

const BooksCard = () => {
  const dispatch = useAppDispatch();
  const bookRedux = useAppSelector((state) => state.books.data);
  const booksFavorite = useAppSelector((state) => state.books.favoriteBooks);
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedGeneros, setSelectedGeneros] = useState<string[]>([]);
  const [selectedAutores, setSelectedAutores] = useState<string[]>([]);

  const filteredBooks = bookRedux.filter((book) => {
    const matchesTitle = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenero = selectedGeneros.length === 0 || selectedGeneros.includes(book.genre);
    const matchesAutor = selectedAutores.length === 0 || selectedAutores.includes(book.author.name);

    return matchesTitle && matchesGenero && matchesAutor;
  });

  const handleFilterChange = (filter: string, type: 'genero' | 'autor') => {
    if (type === 'genero') {
      if (selectedGeneros.includes(filter)) {
        setSelectedGeneros(selectedGeneros.filter(f => f !== filter));
      } else {
        setSelectedGeneros([...selectedGeneros, filter]);
      }
    } else {
      if (selectedAutores.includes(filter)) {
        setSelectedAutores(selectedAutores.filter(f => f !== filter));
      } else {
        setSelectedAutores([...selectedAutores, filter]);
      }
    }
  };

  const handleToggleFavorite = (book: Book) => {
    if (booksFavorite.some((favBook) => favBook.ISBN === book.ISBN)) {
      dispatch(removeFavoriteBook(book.ISBN));
    } else {
      dispatch(addFavoriteBook(book));
    }
  };

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };


  const clearFilters = () => {
    setSelectedGeneros([]);
    setSelectedAutores([]);
  };

  return (
    <>
      <nav className="text-black pr-8">
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
                value={searchTerm}
                className="bg-transparent text-black placeholder-gray-400 focus:outline-none w-full "
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img src={search} className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </nav >

      <div className='flex flex-row gap-4 p-6'>
        <button onClick={toggleVisibility} >Filtros</button>
        <span>|</span>
        <button onClick={() => clearFilters()}>Limpiar</button>
      </div>

      {isVisible && (
        <div className="bg-gray-200 border-gray-200 py-10 rounded flex gap-8 p-8">

          {/* Filtro Genero */}
          <div>
            <h2 className="text-lg font-bold mb-2">Género</h2>
            {generos.map((genero) => (
              <label key={genero} className="gap-2 mb-2 flex items-center">
                <input
                  type="checkbox"
                  value={genero}
                  checked={selectedGeneros.includes(genero)}
                  onChange={() => handleFilterChange(genero, 'genero')}
                  className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                {genero}
              </label>
            ))}
          </div>

          {/* Filtro de autores */}
          <div className="w-1/2 grid-cols-2 pl-4">
            <h2 className="text-lg font-bold mb-2">Autor</h2>
            <div className="grid grid-cols-2 gap-1">
              {autores.map((autor) => (
                <label key={autor} className="gap-2 mb-2 flex items-center">
                  <input
                    type="checkbox"
                    value={autor}
                    checked={selectedAutores.includes(autor)}
                    onChange={() => handleFilterChange(autor, 'autor')}
                    className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  {autor}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      <section className={`${filteredBooks.length == 0 ? 'grid place-content-center' : 'container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'} `}>
        {
          filteredBooks.length === 0 &&
          <div className="place-items-center">
            <div>
              <p>No se encontraron resultados</p>
            </div>
          </div>
        }

        {searchTerm !== '' || filteredBooks
          ?
          <>
            {filteredBooks.map((book, index) => (
              <article
                key={index}
                className="p-4 h-full flex flex-col justify-between cursor-pointer hover:opacity-40 transition-opacity duration-500 ease-in-out"
                onClick={(e) => {
                  e.stopPropagation();
                  // handleBookClick(book)
                  handleToggleFavorite(book)
                }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-grow flex-col">
                  <img src={book.cover} alt={book.title} className="w-full h-46 object-cover rounded-sm shadow-lg" />
                  <div className="h-full flex justify-center text-center">
                    <header className="p-4 ">
                      <h5 className="text-xl font-semibold mb-2">{book.title}</h5>
                    </header>
                  </div>
                  <footer className="p-4 flex flex-col items-center justify-center">
                    <p className="text-sm text-wrap text-gray-600">Autor: {book.author.name}</p>
                    <p className="text-sm text-gray-600">Género: {book.genre}</p>
                    <p className="text-sm text-gray-600">Año: {book.year}</p>
                  </footer>
                </div>
              </article>
            ))}
          </>
          :
          bookRedux.map((book) => (
            <article
              key={book.ISBN}
              className="p-4 h-full flex flex-col justify-between cursor-pointer hover:opacity-30 transition-opacity duration-500 ease-in-out"
              onClick={(e) => {
                e.stopPropagation();
                // handleBookClick(book)
                handleToggleFavorite(book)

              }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-grow flex-col">
                <img src={book.cover} alt={book.title} className="w-full h-46 object-cover rounded-sm shadow-lg" />
                <div className="h-full flex justify-center text-center">
                  <header className="p-4 ">
                    <h5 className="text-xl font-semibold mb-2">{book.title}</h5>
                  </header>
                </div>
                <footer className="p-4 flex flex-col items-center justify-center">
                  <p className="text-sm text-wrap text-gray-600">Autor: {book.author.name}</p>
                  <p className="text-sm text-gray-600">Género: {book.genre}</p>
                  <p className="text-sm text-gray-600">Año: {book.year}</p>
                </footer>
              </div>
            </article>
          ))}
      </section>
    </>
  );
};

export default BooksCard;
