// console.log("%cSet Object","color:green;");
console.log('\u001b[32m' +"Set Object");

// Set Object

const colors = ["red", "green", "blue", "red", "blue"];

console.log(colors); // [ 'red', 'green', 'blue', 'red', 'blue' ]
console.log(colors.length);  // 5

// Removing Duplicates From an array 
const colorset = new Set(colors);
console.log(colorset);  // Set(3) { 'red', 'green', 'blue' }   
console.log(colorset.size); // 3

// => Set() to Array , Converting Set to Array

const colorarrs = Array.from(colorset);
console.log(colorarrs);  // [ 'red', 'green', 'blue' ]

const colourarrs = [...colorset];
console.log(colourarrs);  // [ 'red', 'green', 'blue' ]

// 20ST 
