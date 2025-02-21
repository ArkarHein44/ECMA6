// Super Keyword 

class Person 
{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	greet(){
		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
	}
}

class Student extends Person
{
	constructor(name, age, city){
		super(name, age); // calls the parent class constructor

		this.name = name;
		this.age = age;
		this.city = city;

	}

	study(){
		console.log(`My name is ${this.name} and I am ${this.age} years old. My hometown is ${this.city}`);
	}

	greet(){
		super.greet();
		console.log("Hello Sir, How are you?");
	}
}

const personObj = new Person("Su Su", 20);
console.log(personObj);  // Person { name: 'Su Su', age: 20 }
console.log(personObj.name);  // Su Su
console.log(personObj.age);  // 20
personObj.greet();  // Hello, my name is Su Su and I am 20 years old.

const studentObj = new Student("Kyaw Kyaw", 18, "Yangon");
console.log(studentObj);  
console.log(studentObj.name);  
console.log(studentObj.age);  
studentObj.study();
studentObj.greet(); 

// ES6 မှာ super keyword ကနေတစ်ဆင့်, class inheritance မှာ parent class ၏ methods, constructors တို့ကို access လုပ်နိုင်ပါတယ်။
// super() ကို parent class ၏ constructor ကို ခေါ်ရန် အသုံးပြုနိုင်ပြီး၊
// super.method() က parent class ရဲ့ method ကို access လုပ်နိုင်ပါတယ်။