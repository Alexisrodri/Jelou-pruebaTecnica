export const fetchBooks = async () => {
    return await fetch('https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev/')
        .then(async res => {
            if (!res.ok) throw new Error('Error en la peticion.')
            return await res.json();
        })
}