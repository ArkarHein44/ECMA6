console.log("=> Argument Objects");

// Note:: argument object can't set in arrow function 

function getname(first,last){
    console.log(first, last);
}

getname("Hsu", "Myat");

function getfullname(first, middle, last){
    console.log(first, middle, last);

    console.log(arguments); // [Arguments] { '0': 'Hsu', '1': 'Myat', '2': 'Noe' }
    console.log(typeof arguments); /// object

    console.log(arguments[0]);  // Hsu
    console.log(arguments[1]);  // Myat
    console.log(arguments[2]);  // Noe
}

getfullname("Hsu", "Myat", "Noe");

function getcountry(){
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

getcountry();
getcountry("Thailand","Sirilanka");

// Error argument object can't set in arrow function 
const getcity = function(){
    console.log(arguments); // Unexpected token
}

getcity("Bago")


function getnumber(){
    let result = 0;

    for(const val of arguments){
        result+= val;
    }

    return result;
}

console.log(getnumber(10,20, 30,40,50)); // 150


function totalresults(){
    console.log(arguments)

    let result = 0;

    for(let x=0; x < arguments.length; x++){
        result += arguments[x];
    }

    return result;
}

// console.log(totalresults(10,20,30,40,50));
console.log(totalresults(...[10,20,30,40,50]));

const amounts = [10,20,30,40,50];
console.log(totalresults(...amounts)); // 150

const arrs = [10, 20, 30, 40, 50];
const totalvalue = arrs.reduce((total, curr)=>(total += curr),0);

console.log(totalvalue);

// Error 
// function sumresut(){
//     // return arguments;

//     const sumvalue = arguments.reduce((total, curr)=>(total += curr),0);

//     console.log(sumvalue);
// }

// sumresut(10,20,30,40,50);


function sumresut(){
    // return Array.from(arguments);

    const myarrs = Array.from(arguments);

    const sumvalue = myarrs.reduce((total, curr)=>(total += curr),0);

    console.log(sumvalue);
}

sumresut(10,20,30,40,50); // 150

function calculate (){

    myarrs = [...arguments];
    // return myarrs;

    const sumvalue = myarrs.reduce((total, curr)=>(total += curr),0);

    return sumvalue;
}

console.log(calculate(10,20,30,40,50)); // 150
console.log(calculate(...[10,20,30,40,50])); // 150

function colorlists(){
    
    const colors = Array.from(arguments);

    return colors.map((color, index)=>{
        return `${++index} is ${color} color.`;
    });
}

console.log(colorlists("red" , "green", "blue"));
// [ '1 is red color.', '2 is green color.', '3 is blue color.' ]



