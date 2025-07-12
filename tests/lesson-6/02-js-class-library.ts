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
        // return this.books.find(book => book.toLowerCase() === title.toLowerCase());
        if(this.books.some(bookName => bookName.toLowerCase() === title.toLowerCase())) {
            console.log("Find out book with title: ", title);
        } else {
            console.log("Not find out book with title: ", title);
        }
    }
}

const lib = new Library("Global Lib", "Vietnam", ["Iron Man", "X6", "7H"]);
console.log(lib);

let books = ["Book 1", "Book 2", "This is book 3", "Read me: book 4"];
books.forEach(element => {
    lib.addBook(element);
});
console.log("New lib: ", lib);

let title1 = "This IS BOOK 3";
let title2 = "book";
lib.findBook(title1);
lib.findBook(title2);