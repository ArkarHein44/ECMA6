// use strict 
// "use strict" ဆိုတာ JavaScript မှာ strict mode ကို ခေါ်သုံးတာပါ။ Strict mode သည် JavaScript ကို ပို၍ strict (တိတိကျကျ) ဖြစ်စေပြီး အချို့သော error တွေကို မဖြစ်မနေ စစ်ဆေးပြီး prevent လုပ်ပေးပါတယ်။
// "use strict"; ကို အပေါ်ဆုံးမှာ ခေါ်ထားဖို့လိုပါတယ်။

// x = 10;
// console.log(x); // 10

// "use strict";
// y = 10;
// console.log(ys); // ReferenceError: ys is not defined

// Prevent this from referring to Global Object
// function greet(){
// 	console.log(this);
// }

// greet();


// "use strict";

// function sayhi(){
// 	console.log(this);
// }

// sayhi(); // undefined

// "use strict";

// const staff = {
// 	name: "Su Su",
// 	name: "Aung Aung"
// };

// console.log(staff);  // { name: 'Aung Aung' }

// class Moblie 
// {
// 	brand = ()=>{
// 		console.log(this);
// 	}
// }

// const mobileObj = new Moblie();
// mobileObj.brand();

"use strict";

class Phone 
{
	brand = ()=>{
		console.log(this);
	}
}

const phoneObj = new Phone();

// Method call 
phoneObj.brand(); 

// Function call 
const getphonebrand = phoneObj.brand;
getphonebrand(); 