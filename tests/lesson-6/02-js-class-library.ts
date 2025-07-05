class Library { 
    name: string;
    location: string;
    books: string[];

    constructor(name: string, location: string, books: string[]) {
        this.name = name;
        this.location = location;
        this.books = books;
    }

    addBook(book: string) {
        this.books.push(book);
    }

    findBook(title: string) {
        return this.books.find(book => book.toLowerCase() === title.toLowerCase());
    }
}

const lib = new Library("Global Lib", "Vietnam", ["Iron Man", "X6", "7H"]);
console.log(lib);

let books = ["Book 1", "Book 2", "This is book 3", "Read me: book 4"];
books.forEach(element => {
    lib.addBook(element);
});
console.log("New lib: ", lib);

let title = "This IS BOOK 3";
console.log("Find book with title: ", lib.findBook(title));