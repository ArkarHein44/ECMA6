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

// gmail