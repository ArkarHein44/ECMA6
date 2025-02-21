// Public Properties & Methods 

class Student{

    constructor(name, age){
        this.name = name; // public property
        this.age = age;
    }

    // public method
    greet(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Employee extends Student{

    constructor(name, age, jobtitle){
        super(name,age); // call the parent class constructor
        this.jobtitle = jobtitle; // additional public property
    }

    employeeinfo(){
        // return `${this.greet()}, My job title is ${this.jobtitle}.`;
        return `My name is ${this.name}. I am ${this.age} years old. My job is ${this.jobtitle}.`;
    }
}

const studentObj = new Student("Hsu Hsu", 20);
console.log(studentObj);

console.log(studentObj.name); // Hsu Hsu
console.log(studentObj.age); // 20
console.log(studentObj.greet()); // My name is Hsu Hsu. I am 20 years old.

const employeeObj = new Employee("Yu Yu", 25, "Manager");
console.log(employeeObj);
console.log(employeeObj.name);
console.log(employeeObj.age);
console.log(employeeObj.jobtitle);
console.log(employeeObj.greet);
console.log(employeeObj.employeeinfo());

// => Private properties & methods
class BankAccount{
    #balance; // private property

    constructor(name, balance){
        this.name = name;
        this.#balance = balance;
    }

    deposit(amount){
        this.#balance += amount;
    }

    getbalance(){
        return `Main Balance = ${this.#balance} USD.`;
    }
}

const bankaccountObj = new BankAccount("Tun Tun", 1000);

console.log(bankaccountObj)
console.log(bankaccountObj.name);
// console.log(bankaccountObj.#balance); // error 

console.log(bankaccountObj.getbalance());
bankaccountObj.deposit(800);
console.log(bankaccountObj.getbalance());

// => Protected Properties & Methods
class Vehicle{
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this._year = year;
    }

    getinfo(){
        return `${this.brand} ${this.model}, ${this._year}`;
    }
}

class Car extends Vehicle{
    constructor(brand, model, year, engine){
        super(brand, model, year);
        this.engine = engine;
    }

    getdetailinfo(){
        return `${this.getinfo()}, Engine is ${this.engine}`;
    }
}

const carObj = new Car("Toyota", "Crown", 2025, "EV");
console.log(carObj);
console.log(carObj.getdetailinfo());
console.log(carObj.brand);
console.log(carObj.model);
// console.log(carObj._year); // Not recommanded

// Modifier    Syntax      Inside Classs   Subclass    Outsideclass
// public      this.name   Yes             Yes         Yes
// Private     #name       Yes             No          No 
// Protected   _name       Yes             Yes         No(not recommended)

// 21AS 