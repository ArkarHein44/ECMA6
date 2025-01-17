//Optional Chaining Operator (?.)
// usage: avoiding runtime errors 

// syntax 
// object?.property
// object?.[expression]
// object?.method()

// => Accessing Object Porperties

let students = {
    name: "Aye AYe",
    address:{
        city:"Yangon",
        country:"Myanmar"
    }
};

console.log(students.name ? students.name :  "no data");
console.log(students?.name); 

// console.log(students.contact.phone  ? students.contact.phone  :  "no data"); 
// TypeError: Cannot read properties of undefined (reading 'phone') 
// this is runtime error 

console.log(students?.contact?.phone); // undefined
console.log(students?.address?.city); // Yangon

// => Accessing Array Elements 
let staffs = [
    {name: "Bo BO"},
    null,
    {name:"Mi Ni"},
    undefined
];

console.log(staffs[0]?.name); // Bo Bo
console.log(staffs[1]?.name); // undefined
console.log(staffs[2]?.name); // Mi Ni
console.log(staffs[3]?.name); // undefined
console.log(staffs[10]?.name); // undefined

// => Calling Method 
let employees = {
    sayhi:()=>{
        return "Hello Boss!";
    }
}

console.log(employees?.sayhi());
// console.log(employees.saygoodbye());
// TypeError: employees.saygoodbye is not a function
    // at Object.<anonymous>
console.log(employees?.saygoodbye?.()); // undefined

// => Accessing Dynamic Properties
let users = {
    setting:{
        theme:"dark mode"
    }
};

let key = "theme";

console.log(users?.setting?.theme); // dark mode
console.log(users?.setting?.[key]); // dark mode
console.log(users?.config?.[key]); // undefined

// =>OCO (?.) with Coalescing Operator (??)
let worker = {
    nrc: "10/MaLaNa(N)12345",
    passport: null
};

let getnrc = worker?.nrc ?? "No NRC";
console.log(getnrc); // 10/MaLaNa(N)12345

let getpassport = worker?.passport ?? "No Passport";
console.log(getpassport); // No Passport

// let getpassporttype = worker.passport.type ?? "PV"; 
let getpassporttype = worker?.passport?.type ?? "PV"; 
console.log(getpassporttype); // PV