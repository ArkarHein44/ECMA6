// => Array
let male = "Aung Aung";
let female = "Su Su";
console.log(male, female);

// => Array Destructuring
const [person1, person2 ] = [female, male];
console.log(person1);
console.log(person2);

const mynumbers = [100, 200, 300];
console.log(mynumbers[0]);
console.log(mynumbers[1]);
console.log(mynumbers[2]);
console.log(mynumbers[3]); // undefined

const [val1, val2, val3, val4] = mynumbers;
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4); // undefined

// => Skipping Elements

const numbers = [10,20,30,40,50];
const [num1,,,,num5] = numbers;

console.log(num1);
console.log(num5);


// => Default Values

const arrnumbers = [100];

let [a=1, b=200, c=300] = arrnumbers;
console.log(a); // 100
console.log(b); // 200
console.log(c); // 300

// => Nested Destructuring

const yournums = [10, [20, 30, 40] , 50];

const [first, [second, third, fourth], fifth] = yournums;

console.log(first); // 10
console.log(second); // 20
console.log(third); // 30
console.log(fourth); // 40
console.log(fifth); // 50


// find fibonacci sequence in javascript 
let fibseq = (n)=>{
	let f = 0, s = 1, i=0;
	
	while(i<n){
		i++;
		let t = f;
		f = s;
		s = t+s;
		console.log(f);
	}

}
 
// fibseq(5);

// find gcd in javascript (euclidean algorithm - substraction method)

let getgcd = (num1, num2)=>{
	if(typeof(num1) === "number" && typeof(num2) === "number"){
		num1 = Math.abs(num1);
		num2 = Math.abs(num2);

		while(num1 !== num2){
			if(num1 > num2){
				num1 -= num2;
			}else{
				num2 -= num1;
			}
		}
		console.log(`GCD is ${num1}`);
	}else{
		console.log("num1 and num2 must be numbers");
	}
	

}

// getgcd(1,13);




