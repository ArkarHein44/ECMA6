import {Phone} from "./phone.js";

const phoneObj = new Phone("iPhone", "5G", "Rose Gold");

console.log(phoneObj._brandname);
console.log(phoneObj.getbrandname());
console.log(phoneObj.getnetwork());
console.log(phoneObj.getcolor());

