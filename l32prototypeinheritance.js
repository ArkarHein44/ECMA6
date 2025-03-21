// => Prototype inheritance without Classes

const person = {
    sayhi(){
        console.log("Hello sir!");
    }
}

const student = Object.create(person);

student.saybye = function(){
    console.log(`Good bye sir!`);
}

student.saybye();
student.sayhi();

// exercise

function Vehicle(){

}

Vehicle.prototype.vancar = function(){
    return `this is van car`;
}

function Bike(brand){
    this.brand = brand;
}

Bike.prototype = Object.create(Vehicle.prototype); // important, step1
Bike.prototype.constructor = Bike; // solve // important, step2

Bike.prototype.ebike = function(){
    return "this is e-bike";
}

const vehicleObj = new Vehicle();
console.log(vehicleObj);
console.log(vehicleObj.vancar());

const bikeObj = new Bike("marin");
console.log(bikeObj.ebike());

console.log(bikeObj.vancar());

// console.log(vehicleObj.brand);
// console.log(vehicleObj.ebike()) // error, Uncaught TypeError:

// gmail 