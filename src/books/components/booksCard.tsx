import { useState } from "react";
import { Book } from "../interfaces/books";

interface Books {
  book: Book
}

const BooksCard = ({ book }: Books) => {
  const { title, cover, author, genre, year } = book;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log()
  };

  return (
    <article
      className="p-4 h-full flex flex-col justify-between cursor-pointer"
      onClick={toggleFavorite}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-grow flex-col">
        <img src={cover} alt={title} className="w-full h-46 object-cover rounded-sm shadow-lg" />
        <div className="h-full flex justify-center text-center">
          <header className="p-4 ">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
          </header>
        </div>
        <footer className="p-4 flex flex-col items-center justify-center">
          <p className="text-sm text-wrap text-gray-600">Autor: {author.name}</p>
          <p className="text-sm text-gray-600">Género: {genre}</p>
          <p className="text-sm text-gray-600">Año: {year}</p>
        </footer>
      </div>
    </article>
  );
};

export default BooksCard;