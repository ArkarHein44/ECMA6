import Book from "./book.js";

export class BookManage{
    constructor(){
        this.books = [];
    }

    addBook = (title, author, year)=>{
        const newBook = new Book(title,author,year);
        this.books.push(newBook);
        console.log(`New book created : ${title}`);
    }

    listBooks = ()=>{
        console.log("All Books list:");
        this.books.forEach((book,index)=>{
            console.log(`${++index}, ${book.bookInfo()}`)
        })
    }

    searchByAuthor = (author)=>{
        return this.books.filter(book=>book.author.toLowerCase() === author.toLowerCase());
    }
}