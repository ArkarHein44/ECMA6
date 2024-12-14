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

country();
country("Thailand","Sirilanka");

// Error argument object can't set in arrow function 
const getcity = (){
    console.log(arguments); // Unexpected token
}

getcity("Bago")

// 14OO 