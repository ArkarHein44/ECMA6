import {People} from "./people.js";

const peopleObj = new People("Yoon Yoon");

console.log(peopleObj._fullname);
console.log(peopleObj.getname());
console.log(_fullname.get(peopleObj)); // error Note: direct weakmap access (only possible inside this file)