// template literals 
let num1 = 100, num2 = 200;
console.log(`num1+num2 = ${num1+num2}`);

let arr1 = [1,2,3,4,5,6,7,8];
// arr1.forEach((x,y,z)=>{
//     console.log(`x = ${x}`); // iterate elements in array
//     console.log(`y = ${y}`); // iterate index 
//     console.log(`z = ${z}`); // not iterate original array
// });
const nopara = ()=>{
    
}
let greet = name => console.log(`Hello ${name}`); // one parameter and return this
greet("Aye Aye");

// two parameters
const arrowfun = (x,y)=>(x=y);

// console.log(arrowfun(10,20));

const euclidean = (num1, num2)=>{
    // convert to positive integer
    num1 = Math.abs(num1); 
    num2 = Math.abs(num2);

    while(num1 != num2){
        if(num1 > num2){
            num1 = num1-num2
        }else if(num2>num1){
            num2 = num2-num1;
        }
    }

    GCD = num1;
    
    console.log(`GCD is ${GCD}`);
}

euclidean(50,20);








