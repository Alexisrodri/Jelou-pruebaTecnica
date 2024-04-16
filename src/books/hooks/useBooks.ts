import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../../services/books";
import { Books, Book } from "../interfaces/books";

export const useBooks = () => {
    const { isLoading, isError, data, refetch } = useQuery<Books>({
        queryKey: ['books'],
        queryFn: fetchBooks
    })

    return {
        isLoading,
        isError,
        books: data?.default?.library?.map((item: { book: Book }) => item.book) || [],
        refetch
    }

}
