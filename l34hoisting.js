// Hoisting (do and don't)

myfunone();

// Function Declaration 

function myfunone(){
    console.log("My Fun One");
}

myfunone();

// myfuntwo(); // Error

// => Function Expression
const myfuntwo = function(){
    console.log("My Fun Two");
}

myfuntwo(); // My Fun Two

// const seasononeObj = new Seasonone(); // Error
// console.log(seasononeObj); // Error

// Class Declaration 
class Seasonone{
    constructor(){
        this.info = "This is season one";
    }
}

const seasononeObj = new Seasonone();
console.log(seasononeObj);


// const seasontwoObj = new Seasontwo(); // Error
// console.log(seasontwoObj); // Error

// Class Expression

const Seasontwo = class{
    constructor(){
        this.info = "This is season two";
    }
}

const seasontwoObj = new Seasontwo();
console.log(seasontwoObj);

// 27OT