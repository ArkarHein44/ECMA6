console.log("Prototype");

const obj = {};
console.log(obj); // Object base

const arr = [];
console.log(arr); // Array base

const newobj = new Object();
console.log(newobj); 

const newarr = new Array();
console.log(newarr);

const boys = ["kyaw kyaw", "tun tun"];
console.log(boys);

const girls = new Array("su su", "yu yu");
console.log(girls);

const students = {
    name: "Honey",
    age: 25,
    city: "Yangon"
};

console.log(students);

const staffs = new Object();
staffs.name = "Thura";
staffs.age = 30;
staffs.city = "Bago";

console.log(staffs);

// => Run in console
let x = {};
console.log(x);

let y = {};
console.log(y);

// Method 1 
Object.getPrototypeOf(x);
Object.getPrototypeOf(y);

// Method 2
x.__proto__;
y.__proto__;

Object.getPrototypeOf(x) === x.__proto__;

// 7PT 
