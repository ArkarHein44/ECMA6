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