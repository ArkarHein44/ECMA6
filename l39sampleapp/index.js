import { BookManage } from "./app.js";

const manage = new BookManage();

// Add books
manage.addBook("Book One","Aung Kyaw",2024);
manage.addBook("Book Two","Aung Kyaw",2020);
manage.addBook("Book Three","Aung Kyaw",2021);
manage.addBook("Book Four","Aung Kyaw",2021);
manage.addBook("Book Five","Su Su",2022);
manage.addBook("Book Six","Su Su",2023);
manage.addBook("Book Seven","Yu Yu",2024);

// List books
manage.listBooks();

// search books
const authorname = "Su Su";
const getfilters = manage.searchByAuthor(authorname);
// console.log(getfilters);

for (const {title,year} of getfilters){
    console.log(`${title} publish in - ${year}`);
}

// 11OV 