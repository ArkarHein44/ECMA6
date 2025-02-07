function Car(){
	this.brand = function(){
		console.log(this);
	}
}

const carObj = new Car();

// Method call 
carObj.brand();

// Function call 
const getcarbrand = carObj.brand;
getcarbrand();

"use strict";

const Vehicle = function(){
	this.brand = function(){
		console.log(this);
	}
}

const vehicleObj = new Vehicle();

// Method call 
vehicleObj.brand();

// Function call 
const getvehiclebrand = vehicleObj.brand;
getvehiclebrand();

// 31US 
