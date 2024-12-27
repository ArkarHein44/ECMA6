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

// gmail