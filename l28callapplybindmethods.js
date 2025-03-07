console.log("=> call, applyPatches, bind Methods");

const person = {name:"Kyaw Kyaw"};

function greet(){
    console.log(`Hello, my name is ${this.name}`);
}

greet.call(person); // Hello, my name is Kyaw Kyaw
greet.apply(person); // Hello, my name is Kyaw Kyaw

console.log("=> call(), apply() with Argument");

const person1 = {name: "Su Su"};
const person2 = {name: "Hsu Hsu"};

function introduce(val1, msg){
    console.log(`${val1}, my name is ${this.name} ${msg}`);
}

introduce.call(person1,"Hello","Nice to meet you."); // Hello, my name is Su Su Nice to meet you.
introduce.call(person2,"Hello","Have a gerat day!"); // Hello, my name is Hsu Hsu Have a gerat day!

introduce.apply(person1,["Hello","Nice to meet you."]); // Hello, my name is Su Su Nice to meet you.
introduce.apply(person2,["Hello","Have a gerat day!"]); // Hello, my name is Hsu Hsu Have a gerat day!

const student = {
    name: "Yamin",
    age:18,
    setage(){
        return this.age = 20
    }
};

const staff = {
    name: "Shwe Sin",
    age: 25
}

console.log(staff); // { name: 'Shwe Sin', age: 25 }

student.setage.call(staff);

console.log(student); // { name: 'Yamin', age: 18, setage: [Function: setage] }
console.log(staff); // { name: 'Shwe Sin', age: 20 }

student.setage.apply(staff);
console.log(staff); // { name: 'Shwe Sin', age: 20 }

console.log("=> call(), apply() with Constructor Function");

function Person(name, age){
    this.name = name;
    this.age = age
}

function Student(name, age, city){
    Person.call(this, name, age); // Inherit properties from Person
    this.city = city;
}

function Employee(name, age, city){
    Person.apply(this,[name, age]); // Inherit properties from Person
    this.city = city;
}

const studentObj = new Student("Yamone", 18,"Mandalay");
console.log(studentObj); // Student { name: 'Yamone', age: 18, city: 'Mandalay' }

const employeeObj = new Employee("Myint Mho", 20, "Yangn");
console.log(employeeObj); // Employee { name: 'Myint Mho', age: 20, city: 'Yangn' }

console.log("=> bind()");
console.log("Syntax");
console.log("const fun = originalfunction.bind(thisArg,arg1,arg2,...");

// 28BD 

// => bind()
// syntax 
// const fun = originalfunction.bind(thisArg,arg1,arg2,..);

const member = {
    name: "Aye Aye",
    greet:function(){
        console.log(`Hello, my name is ${this.name}`);
    },
    greeting:function(greet,punctuation){
        console.log(`${greet}, my name is ${this.name} ${punctuation}`)
    }
}

member.greet();

const user = {name:"Kyaw Kyaw"};
const funone = member.greet.bind(user);
funone();

const funtwo = member.greeting.bind(user);
funtwo("Hi", "!");  // Hi, my name is Kyaw Kyaw !

function hifi(greet,msg,bye){
    console.log(`${greet}, my name is ${this.name}, ${msg}, ${bye}`);
}

const employee = {name: "Yoon Yoon"}

const funthree = hifi.bind(employee);
funthree("Hello", "I am 28 years old.", "Nice to meet you!");

const funfour =hifi.bind(employee,"Hi", "I am 30 years old.", "Nice to meet you!");
funfour();