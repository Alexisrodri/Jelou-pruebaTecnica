import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../../services/books";
import { Books } from "../interfaces/books";

export const useBooks = () => {
    const { isLoading, isError, data, refetch } = useQuery<Books>({
        queryKey: ['books'],
        queryFn: fetchBooks
    })

    return {
        isLoading,
        isError,
        books: data?.default,
        refetch
    }

}
