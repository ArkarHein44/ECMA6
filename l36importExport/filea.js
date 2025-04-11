console.log("I am file A");

//-----------exe1--------------------------
// import "./fileb.js"; 
// import ("./fileb.js"); 

// import ("./fileb.js"); 
// import ("./fileb.js"); 
// import ("./fileb.js"); 
//-----------------------------------------

//-----------exe2--------------------------
// import { myfunone } from "./fileb.js"; 
// myfunone();

// import { myfunone as myvipfunone } from "./fileb.js";
// myvipfunone();


//-----------exe3--------------------------
// import { greeting,id as idx } from "./fileb.js";
// console.log(idx);
// console.log(greeting);

// import { greeting,id as idx, myfuntwo } from "./fileb.js";
// console.log(idx);
// console.log(greeting);
// myfuntwo();

//-----------exe4--------------------------
// import hifi from "./fileb.js";
// console.log(hifi);

// import message from "./fileb.js";
// console.log(message);

// import datas from "./fileb.js";
// console.log(datas); // ["hello Sir!", 1002]
// console.log(datas[0]); // Hello Sir!
// console.log(datas[1]); // 1002

// import getdatas from "./fileb.js";
// console.log(getdatas); 
// console.log(getdatas.idx); 
// console.log(getdatas.fullname);
// console.log(getdatas.age);

import myfunthree from "./fileb.js";
myfunthree();

// npm init -y
// do not forget to put "type":"module" into package.json
// npm run test
// import module will run first, always be on the top of the codes