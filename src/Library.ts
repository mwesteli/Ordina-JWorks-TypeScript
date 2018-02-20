class Library {
    movies: Array<Movie> = [];
    books: Array<Book> = [];

    constructor(movies: Array<Movie>, books: Array<Book>){
        this.movies = movies;
        this.books = books;
    }

    getAll(): Array<Item> {
        let items: Array<Item> = [];

        this.movies.forEach(movie => {
           items.push(movie); 
        });

        this.books.forEach(book => {
           items.push(book); 
        });

        return items;
    }

    static fromJSON(data: any) : Library {
        let movies:Array<Movie> = data.movies.map(val => Movie.fromJSON(val));
        let books:Array<Book> = data.books.map(val => Book.fromJSON(val));
       return new Library(movies, books);
    }

}