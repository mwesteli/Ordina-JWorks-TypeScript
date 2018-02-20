
// let library:Library = new Library();
// library.publishItems();

 //activate when you finished exercise 3
let jsonParser = new JSONParser();

jsonParser.getJSON("items.json", data => {
    
    console.log(data);
    let library:Library = Library.fromJSON(data);
    console.log(library);

    var itemContainer: HTMLElement = document.getElementById("items");
    library.getAll().forEach(item => item.render(itemContainer));
    
});