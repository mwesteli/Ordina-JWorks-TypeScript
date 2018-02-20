function publishItems(title:string,genre:string,description:string) : void {

    let article: HTMLElement = document.createElement("article")
    article.innerHTML =
        "<h3>" + title + "</h3>" +
        "<p>" + genre + "</p>" +
        "<span>" + description + "</span>";


    document.getElementById("items").appendChild(article);

}

class Author {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    toString = () : string => {

        return `Author: ${this.name}`;
    }
}

interface Rating {
    age: number;
    name: string;
}

abstract class Item {
    title: string;
    genre: string;
    description: string;

    constructor(title, genre, description: string) {
        this.title = title;
        this.genre = genre;
        this.description = description;
    }

    abstract render(element: HTMLElement);
}

class Movie extends Item implements Rating {
    age: number;
    name: string;

    constructor(title, genre, description: string, age: number, name: string) {
        super(title, genre, description);
        this.age = age;
        this.name = name;
    }

    render(element: HTMLElement) {
        let newElement = document.createElement("article");
        newElement.innerHTML =
            "<h3>" + this.title + "</h3>" +
            "<p>" + this.name + "</p>" +
            "<p>" + this.genre + "</p>" +
            "<span>" + this.description + "</span>";
            "<span>" + this.age + "</span>";

        element.appendChild(newElement);
    }
}

class Book extends Item {
    author: Author;

    constructor(title, authorName, genre, description : string) {
        super(title, genre, description);
        this.author = new Author(authorName);
    }

    render(element: HTMLElement) {
        let newElement = document.createElement("article");
        newElement.innerHTML =
            "<h3>" + this.title + "</h3>" +
            "<p>" + this.author + "</p>" +
            "<p>" + this.genre + "</p>" +
            "<span>" + this.description + "</span>";

        element.appendChild(newElement);
    }
}

class Library {
    items: Array<Item>;

    constructor() {
        let lotr: Book = new Book("Lord Of The Rings", "JRR Tolkien", "Fantasy", "You know what");
        let ocaBook: Book = new Book("oca book", "Some person", "Educational", "To OCA or not ot OCA");
        let matrix: Movie = new Movie("The matrix", "test123", "matrix", 20, "matrix");

        this.items = new Array<Item>();
        this.items.push(lotr, ocaBook, matrix);
    }

    render() {
        const itemSection = document.getElementById("items");

        this.items.forEach(item => {
           item.render(itemSection);
        });
    }
}

function createAndRenderLibrary() {
    let library = new Library();
    console.log(library.items);
    library.render();
}

createAndRenderLibrary();

// publishItems("Matrix","Thriller","Did you know, Neo is the one?");

// publishItems("Moby Dick","Drama","Is this fish for real?");