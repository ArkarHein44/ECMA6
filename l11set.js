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
// unique value လိုချင်တဲ့အခါ set ကိုသုံးမယ်
// ဥပမာ array ၂ ခုကို ပေါင်းလိုက်ပီး duplicate value တွေမပါစေချင်တဲ့အခါ

const names = new Set();
names.add("aung aung");
names.add("kyaw kyaw");
names.add("yu yu").add("nu nu").add("hal hal");
console.log(names); // Set(5) { 'aung aung', 'kyaw kyaw', 'yu yu', 'nu nu', 'hal hal' }
console.log(names.size); // 5
console.log(names[0]); // undefined

names.forEach(name=>{
	console.log(name);
});
// aung aung
// kyaw kyaw
// yu yu
// nu nu
// hal hal

let students = new Set();
students.add("hla hla").add("nu nu").add("yoon yoon");
students.add('aung aung').add('kyaw kyaw').add('zaw zaw');

console.log(students);
// Set(6) {
// 	'hla hla',
// 	'nu nu',
// 	'yoon yoon',
// 	'aung aung',
// 	'kyaw kyaw',
// 	'zaw zaw'
//   }
console.log(students.size) ; // 6

console.log(students.has('nu nu')); // true
console.log(students.has('Nu Nu')); // false

students.delete('nu nu');

console.log(students);
// Set(5) { 'hla hla', 'yoon yoon', 'aung aung', 'kyaw kyaw', 'zaw zaw' }
console.log(students.size) ; // 5

students.clear();

console.log(students); /// Set(0) {}
console.log(students.size) ; // 0


