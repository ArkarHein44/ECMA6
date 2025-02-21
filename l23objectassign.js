// Object Assign
// Syntax => Object.assign(target, source);

// => Copying properties from another object
const target = {a:"Red"};
const source = {b: "Green", c:"Blue"};

Object.assign(target, source);

console.log(target); // { a: 'Red', b: 'Green', c: 'Blue' }

// => Copying properties from another multi object
const main = {a:10};
const source1 = {b:20};
const source2 = {c:30, d:40};

Object.assign(main, source1, source2);

console.log(main); // { a: 10, b: 20, c: 30, d: 40 }

// => Overwrite properties
const maintarget = {a:100, b:200};
const mainsource = {b:55, c:300};

Object.assign(maintarget, mainsource);
console.log(maintarget); // { a: 100, b: 55, c: 300 } 

// => Cloning an object (shadow copy)
const original = {x:"Red", y:"Green"};
const copy = Object.assign({}, original);

console.log(copy); // { x: 'Red', y: 'Green' }   
console.log(original === original); // true
console.log(copy === original); // false

// => Merge Objects
const obj1 = {a:"Red", b:"Green"};
const obj2 = {b:"Blue", c:"White"};
const obj3 = {d:"BLack"};

const mergeobj = Object.assign({}, obj1, obj2, obj3);

console.log(mergeobj); //  { a: 'Red', b: 'Blue', c: 'White', d: 'BLack' }

// => Nested Objects (shadow copy)
const obj4 = {a:1, b:{x:10}};
const obj5 = Object.assign({}, obj4);

obj5.b.x = 50;

console.log(obj4.b.x); // 50 (unexpected changed)
console.log(obj5.b.x); // 50

// => structuredClone ( Deep Copy )

const obj6 = {a:1, b:{y:10}};
const obj7 = structuredClone(obj6);

obj6.b.y = 50;
obj7.b.y = 100; // original value unchanged

console.log(obj6.b.y); // 100
console.log(obj7.b.y); // 50

// =>  Copying Method
const obj8 = {
    name: "Yu Yu",
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

const obj9 = {};

Object.assign(obj9, obj8);

console.log(obj9); // { name: 'Yu Yu', greet: [Function: greet] 
obj9.greet(); // Hello, my name is Yu Yu

const frontend = {
    design:function(){
        console.log("Frontend Web Developer");
    }
}

const backend = {
    unit:function(){
        console.log("Backend Web Developer");
    }
}

const database = {
    store:function(){
        console.log("Database Developer");
    }
}

const server = {
    cloud:function(){
        console.log("Cloud Computer System");
    }
}

const obj10 = Object.assign({}, frontend, backend, database, server);

console.log(obj10);
// {
//     design: [Function: design],
//     unit: [Function: unit],
//     store: [Function: store],
//     cloud: [Function: cloud]
// }

// 7AA