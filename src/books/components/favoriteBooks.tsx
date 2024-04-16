import { BooksActions } from "../hooks/booksActions";
import { useAppSelector } from "../hooks/store";
import { Book } from "../interfaces/books";

const Aside = () => {
  const booksFavorite = useAppSelector((state) => state.books.favoriteBooks);
  const { setRemoveBook } = BooksActions();

  const handleRemoveFavorite = (ISBN: string) => {
    setRemoveBook(ISBN);
  };

  return (
    <aside className="fixed right-0 top-0 h-screen bg-white w-1/4 shadow-lg overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Libros favoritos</h2>
        {booksFavorite.length === 0 ? (
          <p>No tienes libros agregados a favoritos</p>
        ) : (
          <ul>
            {booksFavorite.map((book: Book) => (
              <li key={book.ISBN} className="mb-2 flex items-center">
                <img src={book.cover} alt={book.title} className="w-16 h-20 object-cover rounded-md shadow-md inline-block" />
                <p className="ml-2 inline-block">{book.title}</p>
                <button
                  className="ml-auto text-red-500"
                  onClick={() => handleRemoveFavorite(book.ISBN)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Aside;
