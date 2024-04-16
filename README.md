
---

# Librería de Libros

Esta aplicación es una librería de libros donde los usuarios pueden buscar libros, filtrarlos por género y autor, y agregarlos a una lista de favoritos.

## Características

- Buscar libros por título
- Filtrar libros por género y autor
- Agregar y quitar libros de favoritos
- Mostrar una lista de libros favoritos en un aside

## Tecnologías utilizadas

- React
- Redux Toolkit
- TypeScript
- Tailwind CSS

## Estructura del proyecto
  - `components/`
    - `BooksCard.tsx`: Componente principal que muestra la lista de libros y los controles de búsqueda y filtros.
    - `favoriteBooks.tsx`: Componente que muestra la lista de libros favoritos en un aside.
  - `hooks/`
    - `booksActions.ts`: Acciones para agregar y quitar libros de favoritos.
    - `useBooks.ts`: Hook personalizado para obtener datos de libros del store.
  - `interfaces/`
    - `books.ts`: Define la interfaz del libro.
  - `public/`
    - `images/`: Carpeta que contiene las imágenes utilizadas en la aplicación.
  - `redux/`
    - `slice/`: Contiene el slice de Redux con el estado y las acciones relacionadas con los libros y favoritos.

## Configuración y Uso

1. **Instalación de dependencias**
    ```bash
    npm install
    ```

2. **Ejecutar la aplicación en modo desarrollo**
    ```bash
    npm start
    ```

3. **Construir la aplicación para producción**
    ```bash
    npm run build
    ```

## Desarrollo

Para contribuir al desarrollo de esta aplicación:

1. Clona el repositorio
    ```bash
    git clone https://github.com/tu-usuario/libreria-libros.git
    ```

2. Crea una nueva rama para tu funcionalidad
    ```bash
    git checkout -b feature/nueva-funcionalidad
    ```

3. Haz tus cambios y realiza un commit
    ```bash
    git commit -m "Agrega nueva funcionalidad"
    ```

4. Sube tus cambios
    ```bash
    git push origin feature/nueva-funcionalidad
    ```

5. Abre un Pull Request en GitHub
