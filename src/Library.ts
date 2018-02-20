class Library {

    items:Array<Item> = [];
    
    constructor(public books: Array<Book>,public movies:Array<Movie>){
        let movieBtn = document.getElementById("addMovieBtn");
        let bookBtn = document.getElementById("addBookBtn");

        movieBtn.onclick = this.addMovie;
        bookBtn.onclick = this.addBooks;
    }

    private addMovie = () => {
        const movie = new Movie("Movie title", "genre", "desc", 15, "name");
        let itemSection = document.getElementById("items");

        movie.render(itemSection);
        this.movies.push(movie);
    };

    private addBooks = () => {
        const book = new Book("Book title", new Author("author"), "genre", "desc");
        let itemSection = document.getElementById("items");

        book.render(itemSection);
        this.books.push(book);
    };

    static fromJSON(data: any) : Library {
        let books: Array<Book> = data.books.map(val => Book.fromJSON(val));
        let movies: Array<Movie> = data.movies.map(val => Movie.fromJSON(val));

        return new Library(books,movies);
    }

    getAll(): Array<Item> {
        this.items = (<Item[]>this.books).concat(this.movies);
        return this.items;
    }
}