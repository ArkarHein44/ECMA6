// Coalescing Operator ( ?? )
// available in languages like PHP, javascript, Python 
// syntax (null, undefined)
// let value = val1 ?? val2;

// Basic Usage 

let fullname = "Hnin Hnin";
let nickname = null;

let result1 = fullname ?? nickname;
console.log(result1); // Hnin Hnin

let result2 = nickname ?? fullname;
console.log(result2); // Hnin Hnin

// => Undefined Usage
let age;
let currentage = 20;

let result3 = age ?? currentage;
console.log(result3); // 20

let result4 = currentage ?? age;
console.log(result4); // 20

let num1 = 0;
let num2 = 100;

let result5 = num1 ?? num2;
console.log(result5); // 0 (0 is not null or undefined)

let result6 = num1 || num2;
console.log(result6); // 100 (0 is falsy)

let result7 = num2 ?? num1;
console.log(result7); // 100 

// => Nested Coalescing 
let firstname = null;
let lastname = undefined;
let familyname = "Bo Bo";

let result8 = firstname ?? lastname ?? familyname;

console.log(result8);

// 17CO