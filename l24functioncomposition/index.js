let username = " Hsu Lae ";

const removespace = (name)=>name.trim();

const setuppercase = (name)=>name.toUpperCase();

const setmessage1 = (name)=>`Hello ${name}. Have a nice day`;

const setmessage2 = (name)=>`Hello ${name}. Have a nice day`;

const result1 = setmessage1(setuppercase(removespace(username)));

console.log(result1); // Hello HSU LAE. Have a nice day