// Class 
// Primitive Type & Reference Type

// Primitive Type 
    // 1. string
    // 2. numbers
    // 3. boolean
    // 4. null
    // 5. undefined
    // 6. symbol

// Reference Type
    // 1. all types of objects 
        // a. object literals
        // b. arrays 
        // c. functions
        // d. date 
        // e. all other objects 

    let val1 = 100;
    let val2 = val1;
    console.log(`val1 value = ${val1}, val2 value = ${val2} `); // 100 100

    val2 = 300;
    console.log(`val1 value = ${val1}, val2 value = ${val2} `); // 100 300

    let obj1 = {name: "su su"};
    let obj2 = obj1; // obj2 points to obj1 ( same memory reference)

    // obj1.name = "Yamone"; // Yamone Yamone
    obj2.name = "Wouthmone";

    console.log(obj1.name); // Wouthmone
    console.log(obj2.name); // Wouthmone

    // => Object Literals 

    const clientOne = {
        // properties 
        username: "aungaung",
        email: "aungaung@gmail.com",

        // methods / member methods
        login(){
            console.log("You are logged in");
        },

        logout(){
            console.log("You are logged out");
        }
    }

    console.log(clientOne);
    console.log(clientOne.email.username, clientOne.email);
    clientOne.login();
    clientOne.logout();

    const clientTwo = {
        // properties 
        username: "aungaung",
        email: "aungaung@gmail.com",

        // methods / member methods
        login:function(){
            console.log("You are logged in");
        },

        logout:()=>{
            console.log("You are logged out");
        }
    }

    console.log(clientTwo);
    console.log(clientTwo.email.username, clientTwo.email);
    clientTwo.login();
    clientTwo.logout();

    // => Class 
    // PascalCase // we use for the class name
    // camelCase
    // snake_case

    // "new" keyword 
    // (i) create a new empty Object()
    // (ii) binds the value of "this" to the new empty object 
    // (iii) call the constructor function to "build" the object 

    class User
    {
        // Constructor Function

        constructor(username, email){
            // properties
            this.username = username;
            this.email = email;
        }

        // instance methods
        login = ()=>{
            console.log("you are logged in");
        }

        logout = ()=>{
            console.log("you are logged out");
        }
    }

const userOne = new User('hnin hnin', 'hninhnin@gmail.com');
const useTwo = new User('min min', 'minmin@gmail.com');
const userThree = new User('soe soe', 'soesoe@gmail.com');

console.log(userOne); 
// User {
//   login: [Function: login],
//   logout: [Function: logout],
//   username: 'hnin hnin',
//   email: 'hninhnin@gmail.com'
// }

console.log(userOne.username); // hnin hnin
console.log(userOne.email); // hninhnin@gmail.com

console.log(useTwo);
// User {
//   login: [Function: login],
//   logout: [Function: logout],
//   username: 'min min',
//   email: 'minmin@gmail.com'
// }

console.log(useTwo.username); // min min
console.log(useTwo.email); // minmin@gmail.com

console.log(userThree.username); // soe soe
console.log(userThree.email); // soesoe@gmail.com

userOne.login(); //  you are logged in
userThree.logout(); // you are logged out
userThree.logout(); // you are logged out

class Employee
{
    constructor(name){
        this.name = name;
        this.codes = function(){
            return "PHP, Laravel, React";
        }
    }

    salary = (amount, currency)=>{
        return `${amount} ${currency}`;
    }

    contact(){
        return "No.10. Shwebo St, Mandalay.";
    }
}

const employeeObj = new Employee('Hsu Hsu');

console.log(employeeObj);
console.log(employeeObj.name);
console.log(employeeObj.codes);
console.log(employeeObj.salary(500, "usd"));
console.log(employeeObj.contact());

class Person
{
    constructor(firstname, lastname, city){
        this.firstname = firstname;
        this.lastname = lastname;
        this.hometown = city;
    }

    getfullname = (title)=>{
        return `${title}.${this.firstname} ${this.lastname}`;
    }
}

const personObj = new Person("Aung", "Kyaw Kyaw", "Yangon");

console.log(personObj);
// Person {
//   getfullname: [Function: getfullname],
//   firstname: 'Aung',
//   lastname: 'Kyaw Kyaw',
//   hometown: 'Yangon'
// }

console.log(personObj.firstname, personObj.lastname); // Aung Kyaw Kyaw
console.log(personObj.hometown); // Yangon
console.log(personObj.getfullname("Mr")); // Mr.Aung Kyaw Kyaw

const personObj2 = new Person("Nu Nu", "Aye", ["Bago", "Mandalay"]);

console.log(personObj2);
console.log(personObj2.firstname, personObj2.lastname);
console.log(personObj2.hometown);
console.log(personObj2.hometown[0]);
console.log(personObj2.hometown[1]);
console.log(personObj2["hometown"][0]);
console.log(personObj2["hometown"][1]);
console.log(personObj2.getfullname("Ms"));

// Person {
//     getfullname: [Function: getfullname],
//     firstname: 'Nu Nu',
//     lastname: 'Aye',
//     hometown: [ 'Bago', 'Mandalay' ]
// }

// Nu Nu Aye
// [ 'Bago', 'Mandalay' ]
// Bago
// Mandalay
// Bago
// Mandalay
// Ms.Nu Nu Aye