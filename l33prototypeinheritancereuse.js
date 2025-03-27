// => Prototype inheritance without Classes

const { VERSION } = require("lodash");

function Vehicle(color){
    this.color = color;
}

Vehicle.prototype.vancar = function(){
    return `this is van car`;
}

function Bike(brand,color){
    Vehicle.call(this,color);
    this.brand = brand;
}

// => Method 1 
Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;

// => Method 2 
function extend(Parent, Child){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

extend(Vehicle, Bike);
extend(Vehicle, Boat);

// *** Note :: must extend prototype member after inheritance
Bike.prototype.ebike = function(){
    return "this is ebike";
}

// method override
Bike.prototype.vancar = function(){
    return "This is ev car = method override by bike";
}

function  Boat(brand, color){
    Vehicle.call(this,color); // call vehicle constructor
    this.brand = brand;

}

Boat.prototype = Object.create(Vehicle.prototype);
Boat.prototype.constructor = Boat;

// *** Note :: must extend prototype member after inheritance
Boat.prototype.eboat = function(){
    return "this is eboat";
}

const vehicleObj = new Vehicle("black");
const bikeObj = new Bike("marin", "red");
const boatObj = new Boat("searay", "steelblue")

console.log(vehicleObj)
console.log(vehicleObj.color);
console.log(vehicleObj.vancar());

console.log(bikeObj);
console.log(bikeObj.brand);
console.log(bikeObj.color);
console.log(bikeObj.vancar());

console.log(boatObj);
console.log(boatObj.brand);
console.log(boatObj.color);
console.log(boatObj.vancar());

const vehicles = [
    new Bike("margin", "green"),
    new Boat("sea ray", "blue")
];

for(let vehicle of vehicles){
    console.log(vehicle.vancar());
}