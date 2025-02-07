// Constructor Function 

// (i) Factory Function 

function info(val){
	return{
		// properties
		name: val,

		// methods 
		job:function(){
			console.log(`${val} is Frontend Web Designer`);
		}
	}
}

const getinfo = info("Aung Aung");
console.log(getinfo); // { name: 'Aung Aung', job: [Function: job] }
console.log(getinfo.name); // Aung Aung
getinfo.job(); // Aung Aung is Frontend Web Designer

// (ii) Constructor Function 

function Phone(brand){
	this.brand = brand;

	this.like = function(){
		console.log(`I love ${brand}`);
	}

	console.log(this);
}

const phoneObj = new Phone("iPhone");

console.log(phoneObj);
console.log(phoneObj.brand);
phoneObj.like();

const getobjkeys = Object.keys(phoneObj);
console.log(getobjkeys);

const getobjvalues = Object.values(phoneObj);
console.log(getobjvalues);

// Adding Porperties 
phoneObj.madeby = "China";
phoneObj["osversion"] = "IOS 18";
phoneObj.price = {pro:1000, promax:1500};

phoneObj.colors = function(){
	console.log("All colors are same price");
}
console.log(phoneObj);

// Delete Properties, Methods 
delete phoneObj.madeby;
delete phoneObj.colors;

console.log(phoneObj);

// Method 2 
const Computer = new Function('brand',`
	this.brand = brand;
	this.like = function(){
	console.log("I love computer")
	}
`);

const computerObj = new Computer("Dell");

console.log(computerObj);
console.log(computerObj.brand);
computerObj.like();

console.log(Phone.name);
console.log(Computer.name);

console.log(Phone.length);
console.log(Computer.length);

for(key in computerObj){
	// console.log(key);

	// console.log(key, computerObj[key]);

	if(typeof computerObjp[key] !== "function"){
		console.log(key, computerObj[key]);
	}
}

// check properties name exists or not 
if("brand" in computerObj){
	console.log("Yes, computerObj has a brand keyname.");
}else{
	console.log("No");
}