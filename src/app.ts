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
        let formatString = `
            Movie
            ----
            title = ${this.title}
            name = ${this.name}
            genre = ${this.genre}
            description = ${this.description}
            age = ${this.age}
        `;
        newElement.innerText = formatString;

        element.appendChild(newElement);
    }
}

class Book extends Item {
    author: Author;

    constructor(title, genre, description: string) {
        super(title, genre, description);
        this.author = new Author("Maarten Westelinck");
    }

    render(element: HTMLElement) {
        let newElement = document.createElement("article");
        let formatString = `
            Book
            ----
            title = ${this.title}
            author = ${this.author}
            genre = ${this.genre}
            description = ${this.description}
        `;
        newElement.innerText = formatString;

        element.appendChild(newElement);
    }
}

class Library {
    items: Item[];

    constructor() {
        let lotr: Book = new Book("Lord Of The Rings", "Fantasy", "You know what");
        let ocaBook: Book = new Book("oca book", "Educational", "To OCA or not ot OCA");
        let matrix: Movie = new Movie("The matrix", "test123", "matrix", 20, "matrix");
        this.items.push(lotr, ocaBook, matrix);
    }

    render() {
        let newDiv = document.createElement("div");
        this.items.forEach(item => {
           item.render(newDiv);
        });
    }
}

publishItems("Matrix","Thriller","Did you know, Neo is the one?");

publishItems("Moby Dick","Drama","Is this fish for real?");