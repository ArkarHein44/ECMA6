const { values } = require("lodash");

// => Property Descriptors 
const obj = {
    name: "Hla Hla"
}

console.log(obj); // { name: 'Hla Hla' }
console.log(Object.getOwnPropertyDescriptor(obj,"name"));
// {
//   value: 'Hla Hla',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// value           =
// writable        = false cannot be modified
// enumerable      = true loops
// configurable    = false can't be deleted

// Object.defineProperty()
// => writable 

const userobj = {};

Object.defineProperty(userobj,"age",{
    value: 20,
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(userobj);
console.log(userobj.age); //20

userobj.age = 30;

console.log(userobj);
console.log(userobj.age); //20

// => enumerable
const staffobj = {
    name: "Aung Aung",
    gender:"Male"
}

Object.defineProperty(staffobj, "gender",{
    enumerable: false
});

console.log(staffobj);
console.log(Object.keys(staffobj));
console.log(staffobj.gender); // Male (still accessible)

// => configurable
const phoneobj = {
    brand: "iPhone 16 Pro Max"
};

Object.defineProperty(phoneobj, "brand",{
    configurable: false
});

delete phoneobj.brand; // this won't work
console.log(phoneobj);
console.log(phoneobj.brand);