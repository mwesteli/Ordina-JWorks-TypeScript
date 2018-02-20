interface Rating{
    age:number;
    name:string;
}
class Movie extends Item implements Rating{

    age:number;
    name:string;

    constructor(title:string,genre:string,description:string,age:number,name:string){
        super(title,genre,description);
        this.age = age;
        this.name = name;
    }

    render(element: HTMLElement):void {
        let article: HTMLElement = document.createElement("article");
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
            "<p>" + this.genre + " "+ this.name +" "+this.age+ "</p>" +
            "<span>" + this.description + "</span>";

        element.appendChild(article);
    }

    static fromJSON(json: any): Movie {
        return new Movie(json.title, json.genre, json.description, json.age, json.name);
    }
}