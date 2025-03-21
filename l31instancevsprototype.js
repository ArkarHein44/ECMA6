// => Instance Members

class Employee{

    constructor(name, age){
        //instance property
        this.name = name;
        this.age = age;
    }
}

const employeeObj = new Employee("Hsu Hsu", 20);
console.log(employeeObj);

console.log(employeeObj.name);

console.log(employeeObj.hasOwnProperty("name")); // true
console.log(employeeObj.hasOwnProperty("age")); // true

// => Prototype Members

class Car{

    constructor(brand){
        //instance property
        this.brand = brand;
    }
}

// prototype method
Car.prototype.getbrand = function(){
    return `Car brand is ${this.brand}`;
}

const carObj1 = new Car("Toyota");
const carObj2 = new Car("Honda");

console.log(carObj1);

console.log(carObj1.getbrand());
console.log(carObj2.getbrand());

console.log(carObj1.hasOwnProperty("brand")); // true
console.log(carObj1.hasOwnProperty("getbrand")); // false, prototype method is not instance method
// console.log(carObj1.prototype.hasOwnProperty("getbrand")); // TypeError: Cannot read properties of undefined (reading 'hasOwnProperty')
console.log(Car.prototype.hasOwnProperty("getbrand")); // true

// => Instance vs Prototype

class People{

    constructor(name){
        this.name = name;
    
        // method
        this.sayhi = function(){
            console.log(`Hello, ${this.name}`);
        }
    }

    // Prototype method
    saybye(){
        console.log(`Goodbye, ${this.name}`);
    }
}

const peopleObj = new People("Yu Ya");
console.log(peopleObj);

console.log(peopleObj.hasOwnProperty("sayhi")); // true
console.log(peopleObj.hasOwnProperty("saybye")); // false
console.log(People.prototype.hasOwnProperty("saybye")); // true
console.log(Object.getPrototypeOf(peopleObj).hasOwnProperty("saybye")); // true

peopleObj.sayhi();
peopleObj.saybye();