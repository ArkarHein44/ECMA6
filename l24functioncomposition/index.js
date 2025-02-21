import pkg from "lodash/fp.js";
const {compose} = pkg; // Destructure compose from lodash

let username = " Hsu Lae ";

const removespace = (name)=>name.trim();

const setuppercase = (name)=>name.toUpperCase();

const setmessage1 = (name)=>`Hello ${name}. Have a nice day`;

// const setmessage2 = (name)=>`Hello ${name}. Have a nice day`;

// const result1 = setmessage1(setuppercase(removespace(username)));

// console.log(result1); // Hello HSU LAE. Have a nice day

function sayhello(){
    return function(){
        return "Hello friend!, How are you.";
    }
}

let getfun = sayhello();
let printmsg = getfun();

console.log(printmsg);

// => Method 1 
function sumfun(num1){
    return function(num2){
        return num1+num2;
    }
}

let getsumfun =sumfun(5);
let result1 = getsumfun(20);
console.log(result1);

let result2 = sumfun(50);
console.log(result2);

let result3 = sumfun(50)(200);
console.log(result3);

// => Shorthand (Method 2)
let multifun = (num1) => num2 =>num1*num2;

let getmultifun = multifun(5);
let resultone = getmultifun(2);
console.log(resultone); // 10

let resulttwo = multifun(50);
console.log(resulttwo(2)); // 100

let resultthree = multifun(25)(4);
console.log(resultthree); // 100

const setmessage2 = (name)=>(mesage)=> `Hello ${name}. ${mesage}.`;

const rstone = setmessage1(setuppercase(removespace(username)));
console.log(rstone); // Hello HSU LAE. Have a nice day


// without lodash 
const rsttwo = setmessage2(setuppercase(removespace(username)))(`Have a nice day`);
console.log(rsttwo); // Hello HSU LAE. Have a nice day




// with lodash (using compose
const rstthreee = compose(setmessage1, setuppercase, removespace);
console.log(rstthreee(username)); // Hello HSU LAE. Have a nice day


// https://lodash.com/
// npm i -g npm
// npm i --save lodash