//----------exe1---------------------------
// console.log("I am file B");

//--------------exe2-----------------------
// export function myfunone(){
//     console.log("Hello i am fun one");
// }

//--------------exe3-----------------------
// let greeting = "Hello, Goodnight sir!";
// let id = 1001;
// export {greeting, id};

// export let greeting = "Hello, Goodnight sir!";
// export let id = 1001;

// export let greeting = "Hello, Goodnight sir!", id = 1001;

// let greeting = "Hello, Goodnight sir!";
// let id = 1001;
// export {greeting as sayhi, id};

// export let greeting = "Hello, Goodnight sir!", id = 1001;
// export function myfuntwo(){
//     console.log("Hello i am fun two");
// }

//--------------exe4-----------------------
// Method 1
// let hifi = "Min Ga lar Par";
// export {hifi as default}; // must be default(default export) import without {}

// Method 2
// let message = "Hello sir, how are you?";
// export default message;

// let welcome = "Hello sir";
// let id = 1002;
// export default [welcome,id];

// let id = 1003;
// export default {
//     idx: id,
//     name: "Honey Nway Oo",
//     age: 25
// };

export default function(){
    console.log("Hello Sir, I am default function");
}