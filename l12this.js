console.log("This Keyword");
// this သည် regular function နှင့် arrow function တွင် အလုပ်လုပ်ပုံချင်းမတူပါ 
// this သည် static scope or lexical scope ဖြစ်ပါသည်။ 
console.log(this); // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

// function ထဲမှာ နောက်ထက် function တစ်ခု ရှိနေရင် ထို function ကို call back function ဟုခေါ်ပါသည်

// regular function, traditional function 
function morning(){
	console.log("Good Morning");
	console.log(this);
}

morning(); // Good Morning // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

const afternoon = function(){
	console.log("Good Afternoon");
	console.log(this);
}

afternoon(); // Good Afternoon // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

const evening = ()=>{
	console.log("Good Evening");
	console.log(this);
}

evening(); // Good Evening // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

// setTimeout(function(){
// 	console.log("Good Night"); // Good Night
// 	console.log(this); // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
// }, 3000);

// setTimeout(()=>{
// 	console.log("Good Bye"); // Good Bye
// 	console.log(this); // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
// }, 3000); 

function outside(){
	let outerval = "Outer Value";

	function inside(){
		console.log(outerval); // can use outside variable
		console.log(this); // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
		console.log(this.outerval);  // undefined
	}

	const inner =()=>{
		console.log(outerval); // can use outside variable
		console.log(this); // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
		console.log(this.outerval);  // undefined
	}

	inside();
	inner();
}

outside(); // Outer Value

//=> For Object 
// Nameless Regular Function = this Work 			NRW
// Nameless Arrow Function = this Not Work 			NAN

// Callback Regular Function = this Not Work  		CRN
// Callback Arrow Function = this Work 				CAW

const obj1 = {
	name: "Kyaw Kyaw",
	age:30,
	city:"Yangon",

	myfun1:function(){
		console.log(this);
	},
	
	myfun2: ()=>{
		console.log(this);
	}
}

obj1.myfun1();
// {
// 	name: 'Kyaw Kyaw',
// 	age: 30,
// 	city: 'Yangon',
// 	myfun1: [Function: myfun1],
// 	myfun2: [Function: myfun2]
//   }

obj1.myfun2(); // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

const obj3 = {
	name: "Tun Tun",
	city: "Mawlamyine",
	job: "Engineer",
	salary: 500000,

	getname:function(){
		const funone = function(){
			// console.log(name); // empty
			console.log(this);
			// console.log(this.name);  // empty
		}

		funone();
	},

	getcity: function(){
		const funtwo = ()=>{
			console.log(this);
			// {
			// 	name: 'Tun Tun',
			// 	city: 'Mawlamyine',
			// 	job: 'Engineer',
			// 	salary: 500000,
			// 	getname: [Function: getname],
			// 	getcity: [Function: getcity]
			//   }

			// console.log(city); // city is not defined
			console.log(this.city); // Mawlamyine
		}

		funtwo();
	},

	getjob:()=>{
		const funthree = function(){
			console.log(this); // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
			// console.log(job); // job is not defined
			console.log(this.job); // undefined
		}

		funthree();
	},

	// Note : NAN > CAW = this not working
	getsalary:()=>{

		const funfour = ()=>{
			console.log(this); // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
			// console.log(salary); // salary is not defined
			console.log(this.salary); // undefined
		}

		funfour();
	}

}

obj3.getname();
obj3.getcity();
obj3.getjob();
obj3.getsalary();

// =>let and const are not added value to Window Global Scope 
// In terminal
// var name = "aung aung"
// name; // aung
// window.name; // aung aung
// window; // (extend window > name (yes))

// var city = "yangon"
// city; // yangon
// window.city; // yangon
// window; // extend window > city (yes)

// let fullname = "su su"
// fullname; // susu
// window.fullname;
// window;

// let country = "myanmar"
// country;
// window.country;
// window;

// const age = 25
// age; // 25
// window.age;
// window;

const items = {
	product: "Iphone 16",
	price:2000,
	// NRW 
	info:function(){
		return `${this.product} Price is base on ${this.price} USD.`;
	},
	// NAN 
	discount:()=>{
		return `Use ${this.price} USD for ${this.product}! Get 20% cash back!`;
	},
}

console.log(items); // 
console.log(items.info()); // Iphone 16 Price is base on 2000 USD.
console.log(items.discount()); // Use undefined USD for undefined! Get 20% cash back!

const group = {
	members:["aung aung", "su su"],
	groupname:["frontend Designer"],

	// NAN 
	groupmembers:()=>{
		console.log(`There are 2 members on this ${this.groupname} group.`);
	},

	//NRW > CAW
	groupinfo:function(){
		return this.members.map(member=>{
			console.log(`${member} is on ${this.groupname} group.`);
		});
	},

	// NRW > CRN 
	groupsay:function(){
		return this.members.map(function(member){
			console.log(`${member} is key person on this ${this.groupname} group.`);
		});
	}
}

console.log(group);
group.groupmembers();
group.groupinfo();
group.groupsay();

const inventroy = [
	{title:"Redbull", price:2500},
	{title:"Sponsor", price:1500}
];

function createitem(inventroy){
	return {
		inventroy,
		itemvalue:function(){
			return this.inventroy.reduce((total,curr)=>{
				total += curr.price
				return total;
			},0);
		}
	}
}

const getresult = createitem(inventroy);
console.log(getresult);
console.log(getresult.itemvalue());
