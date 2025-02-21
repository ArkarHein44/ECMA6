const studentinfo = {};
studentinfo.name = "Yamone";
studentinfo.age = 25;
studentinfo["hobby"] = "Reading";
studentinfo["hobby"] = "Swimming";
console.log(studentinfo); // { name: 'Yamone', age: 25, hobby: 'Swimming' }

const feature1 = "feature";
const feature2 = "feature";

const car ={
    brand: "Toyota",
    madeby:"japan",
    model:"Toyota Crown 2018",
    [feature1]:"crusie control",
    [feature2]: "air-conditioner",
    state:"off",
    speed: 100,
    turnon:function(){
        this.state = "on"
    },
    turnoff(){
        this.state = "off"
    },
    accelerate(){
        if(this.state == "on"){
            this.speed += 10;
        }
    }
}

console.log(car);
// {
//     brand: 'Toyota',
//     madeby: 'japan',
//     model: 'Toyota Crown 2018',
//     feature: 'air-conditioner',
//     state: 'off',
//     speed: 100,
//     turnon: [Function: turnon],
//     turnoff: [Function: turnoff],
//     accelerate: [Function: accelerate]
//   }
// only one feature, one feature mising 

car.accelerate();
console.log(car);

//=> Symbol()

const symbol1 = Symbol();
const symbol2 = Symbol();

console.log(symbol1 === symbol1); // true
console.log(symbol1 === symbol2); // false ( Symbol are always unique)

const symbol3 = Symbol("hello");
const symbol4 = Symbol("hello");

console.log(symbol3 === symbol3); // true
console.log(symbol3 === symbol4); // false ( Symbol are always unique)

const mysymbol = Symbol();
const yoursymbol = Symbol('This is your symbol');

console.log(mysymbol);
console.log(typeof mysymbol); // symbolz

console.log(yoursymbol);
console.log(typeof yoursymbol); // symbol


const action1 = Symbol("feature");
const action2 = Symbol("feature");

const ONSTATE = Symbol("on");
const OFFSTATE = Symbol("off");

const vehicle ={
    brand: "Toyota",
    madeby:"japan",
    model:"Toyota Crown 2018",
    [action1]:"crusie control",
    [action2]: "air-conditioner",
    state:ONSTATE,
    speed: 100,
    turnon:function(){
        this.state = ONSTATE
    },
    turnoff(){
        this.state = OFFSTATE
    },
    accelerate(){
        if(this.state == ONSTATE){
            this.speed += 10;
        }
    }
}

console.log(vehicle);

// {
//     brand: 'Toyota',
//     madeby: 'japan',
//     model: 'Toyota Crown 2018',
//     state: 'off',
//     speed: 100,
//     turnon: [Function: turnon],
//     turnoff: [Function: turnoff],
//     accelerate: [Function: accelerate],
//     [Symbol(feature)]: 'crusie control',
//     [Symbol(feature)]: 'air-conditioner'
//   }

console.log(vehicle.speed); // 100

vehicle.accelerate();
console.log(vehicle);
// {
//     brand: 'Toyota',
//     madeby: 'japan',
//     model: 'Toyota Crown 2018',
//     state: Symbol(on),
//     speed: 110,
//     turnon: [Function: turnon],
//     turnoff: [Function: turnoff],
//     accelerate: [Function: accelerate],
//     [Symbol(feature)]: 'crusie control',
//     [Symbol(feature)]: 'air-conditioner'
//   }

console.log(vehicle.speed);
// 110

for(const key in vehicle){
    console.log(key);
    // Symbol keys are ignored
    // brand
    // madeby
    // model
    // state
    // speed
    // turnon
    // turnoff
    // accelerate
}

console.log(vehicle.brand); // Toyota
// console.log(vehicle[madeby]); // madeby is not defined
console.log(vehicle.action1); // undefined
console.log(vehicle[action1]); // crusie control

// => Object functions 
console.log(Object.keys(vehicle));
// [
//     'brand',
//     'madeby',
//     'model',
//     'state',
//     'speed',
//     'turnon',
//     'turnoff',
//     'accelerate'
//   ]
// Note:: ( Symbol keys are ignored )

console.log(Object.getOwnPropertyNames(vehicle));
// [
//     'brand',
//     'madeby',
//     'model',
//     'state',
//     'speed',
//     'turnon',
//     'turnoff',
//     'accelerate'
//   ]
// Note:: ( Symbol keys are ignored )

console.log(Object.getOwnPropertySymbols(vehicle));
// [ Symbol(feature), Symbol(feature) ]

// => Symbol.iterator ()
console.log(Symbol.iterator); //
console.log(typeof Symbol.iterator); // 

const colors = ["red", "green", "blue"];

for(const value of colors){
    console.log(value);
}

console.log(colors.entries()); // Object [Array Iterator] {}
console.log(colors[Symbol.iterator]()); //Object [Array Iterator] {}

const colorentries = colors.entries();
// console.log(colorentries.next()); // { value: [ 0, 'red' ], done: false }
console.log(colorentries.next().value[1]); // red
console.log(colorentries.next().value[1]); // green
console.log(colorentries.next().value[1]); // blue

const coloriterators = colors[Symbol.iterator]();

// console.log(coloriterators.next()); // { value: 'red', done: false }
// console.log(coloriterators.next().value); // // red
// console.log(coloriterators.next().value); // // green
// console.log(coloriterators.next().value); // // blue

let colorresults = coloriterators.next();
console.log(colorresults); // { value: 'red', done: false }

while(!colorresults.done){
    console.log(colorresults.value);
    colorresults = coloriterators.next(); // don't forget to stop
}

// red
// green
// blue

// => Symbol iterator with Set()
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

// console.log(names[Symbol.iterator]()); 
//  [Set Iterator] {
//   'aung aung',
//   'kyaw kyaw',
//   'yu yu',
//   'nu nu',
//   'hal hal'
// }
// console.log(names[Symbol.iterator]().next()); // { value: 'aung aung', done: false }
// console.log(names[Symbol.iterator]().next()); // { value: 'aung aung', done: false }
// console.log(names[Symbol.iterator]().next().value);  // aung aung
// console.log(names[Symbol.iterator]().next().value); // aung aung

const getnames = names[Symbol.iterator]();
// console.log(getnames);
// [Set Iterator] {
//     'aung aung',
//     'kyaw kyaw',
//     'yu yu',
//     'nu nu',
//     'hal hal'
//   } 
console.log(getnames.next().value); // aung aung
console.log(getnames.next().value); // kyaw kyaw
console.log(getnames.next().value); // yu yu
console.log(getnames.next().value); // nu nu
console.log(getnames.next().value); // hal hal

