// Rest Parameter (...args)

// Note :: can't set first and between

function city(val){
	return val;
}

console.log(city());  // undefined
console.log(city('Yangon')); // Yangon
console.log(city('Yangon', 'Mandalay', 'Bago')); // Yangon

// ...val will collect data with array and passed to function block
function country(...val){
	return val;
}

console.log(country()); ///[]
console.log(country('Myanmar'));  // [ 'Myanmar' ]
console.log(country('Myanmar', 'Thailand', 'Indonesia'));  // [ 'Myanmar', 'Thailand', 'Indonesia' ]

function place(location, ...vals){
	// return location;
	return vals;
}

console.log(place()); // undefined
console.log(place('Chaungtar')); // Chaungtar []
console.log(place('Chaungtar','Ngapali', 'Ngwesaung')); //Chaungtar [ 'Ngapali', 'Ngwesaung' ]

function getinfo(first, last, ...cities){
	console.log("This is first name = ",first);
	console.log("This is last name = ",last);
	console.log("This is cities = ",cities.join(', '));
}

getinfo(); // This is first name =  undefined This is last name =  undefined This is cities =  []
getinfo('aung','kyaw', 'yangon'); // This is first name =  aung This is last name =  kyaw This is cities =  [ 'yangon' ]
getinfo('su', 'yee', 'yangon', 'myanmar', 'asia'); // This is first name =  su This is last name =  yee This is cities =  [ 'yangon', 'myanmar', 'asia' ]

function sumresult(...nums){
	let total = 0;
	
	for(const num of nums){
		total += num;
	}

	return total;
}

console.log(sumresult(10, 20, 30, 40, 50)); // 150

function totalresult(...nums){
	const total = nums.reduce((total,curr)=>total+curr,0);
	return total;
}

console.log(totalresult(10, 20, 30, 40, 50));  // 150

// 6RP 