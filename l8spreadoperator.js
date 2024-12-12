// Spread Operator (...)
console.log("=> Spread Operator (...)");

let val;
val = Math.max(11,3,5,7,9,11,13,15,17,19,-20,0);
console.log(val);

val = Math.min(11,3,5,7,9,11,13,15,17,19,-20,0);
console.log(val);

val = [10, 20, 30, 40, 50];
console.log(Math.max(val)); // NaN
console.log(Math.min(val)); // NaN

console.log(val);
console.log(...val);

console.log(Math.max(...val));  // 50
console.log(Math.min(...val));  // 10

function sumresult(num1, num2, num3){
    return num1+num2+num3;
}

console.log(sumresult(1,2,3)); //6
console.log(sumresult([1,2,3])); //1,2,3undefinedundefined

const numbers = [10,20,30];
console.log(sumresult(...numbers));  // 60

//=> apply(null, array)
console.log(sumresult.apply(null, numbers)); // 60

console.log(Math.max.apply(null, val)); // 60
console.log(Math.min.apply(null, val)); // 60

function getname(name1, name2, name3){
    console.log("Name1 result is = ",name1);
    console.log("Name2 result is = ",name2);
    console.log("Name3 result is = ",name3);
}

getname("su su", "yu yu", "nu nu");
// Name1 result is =  su su
// Name2 result is =  yu yu
// Name3 result is =  nu nu

getname(["su su", "yu yu", "nu nu"]);
// Name1 result is =  [ 'su su', 'yu yu', 'nu nu' ]
// Name2 result is =  undefined
// Name3 result is =  undefined

getname(...["su su", "yu yu", "nu nu"]);
// Name1 result is =  su su
// Name2 result is =  yu yu
// Name3 result is =  nu nu

getname.apply(null, ["su su", "yu yu", "nu nu"]);
// Name1 result is =  su su
// Name2 result is =  yu yu
// Name3 result is =  nu nu

const color = "Red";
console.log(color);
console.log(...color);

getname(color);
getname(...color);

console.log(color);
// Red

console.log(...[color]);
// Red

console.log([...color]);
// [ 'R', 'e', 'd' ]

console.log(color.split());
// [ 'Red' ]

console.log(...["Red"]);
// Red

console.log([..."Red"]);
// [ 'R', 'e', 'd' ]

console.log(...["Red", "Green", "Bleue"]);
// Red Green Bleue

console.log([..."Red", "Green", "Bleue"]);
// [ 'R', 'e', 'd', 'Green', 'Bleue' ]

console.log([..."Red", ..."Green", ..."Bleue"]);
// [
//    'R', 'e', 'd', 'G',
//     'r', 'e', 'e', 'n',
//     'B', 'l', 'e', 'u',
//     'e'
// ]

console.log(...[123,456,70,80,90]);
// 123 456 70 80 90

console.log([..."123",..."456",70,80,90]);
// [
//     '1', '2', '3', '4',
//     '5', '6', 70,  80,
//     90
// ]

console.log([...[123],...[456],70,80,90]);
// [ 123, 456, 70, 80, 90 ]

console.log([[123],[456],70,80,90]);
// [ [ 123 ], [ 456 ], 70, 80, 90 ]

console.log([[..."123"],[..."456"],70,80,90]);
// [ [ '1', '2', '3' ], [ '4', '5', '6' ], 70, 80, 90 ]

// => Spread in Array

const phones = ["apple", "oppo", "vivo", "samsung"];
const cars = ["toyota", "suzuki", "mazda"];
const computers = ["mac", "aoc", "acer", "hp"];

let myowns = [phones, cars, computers];

console.log(myowns);
// [
//     [ 'apple', 'oppo', 'vivo', 'samsung' ],
//     [ 'toyota', 'suzuki', 'mazda' ],
//     [ 'mac', 'aoc', 'acer', 'hp' ]
// ]

myowns = [...phones, ...cars, ...computers];
console.log(myowns);
// [
//     'apple',  'oppo',
//     'vivo',   'samsung',
//     'toyota', 'suzuki',
//     'mazda',  'mac',
//     'aoc',    'acer',
//     'hp'
// ]
const info = {
    name: "Honey Nway Oo",
    gender:"Female",
    age:25
}

const contacts = {
    phone:"09111111",
    city:"Yangon",
    hascar:true
}

const profiles = {
    nickname:"Honey",
    age:30
}

let bio = {info, contacts, profiles};
console.log(bio);
// [
//     [ 'apple', 'oppo', 'vivo', 'samsung' ],
//     [ 'toyota', 'suzuki', 'mazda' ],
//     [ 'mac', 'aoc', 'acer', 'hp' ]
// ]

bio = {...info, ...contacts};
console.log(bio);
// {
//     name: 'Honey Nway Oo',
//     gender: 'Female',
//     age: 25,
//     phone: '09111111',
//     city: 'Yangon',
//     hascar: true
// }


bio = {...profiles, ...contacts, ...info};
console.log(bio);
// {
//     nickname: 'Honey',
//     age: 25,
//     phone: '09111111',
//     city: 'Yangon',
//     hascar: true,
//     name: 'Honey Nway Oo',
//     gender: 'Female'
// }

// 12PO