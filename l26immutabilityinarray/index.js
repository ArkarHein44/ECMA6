// immutability in Array

const numarrs = [10, 20, 30, 40];

// Adding Item
const getindex = numarrs.indexOf(20);
console.log(getindex); // 1

const addmorenums = [...numarrs.slice(0,getindex),50,...numarrs.slice(getindex)];
console.log(addmorenums); // (5) [10, 50, 20, 30, 40]

// Update Item 
const updated = numarrs.map(numarr=> (numarr === 30 ? 60 : numarr));
console.log(updated); //

// Remove Item 
const removed = numarrs.filter(numarr=>numarr !== 40);
console.log(removed);

// with immer 
const newstudentbyimmer = produce(MediaStreamAudioDestinationNode,data=>{
    data.name = "Kyipyar",
    data.contact.city = "PyinOoLwin"
});

console.log(student);
console.log(newstudent);
console.log(newstudentbyimmer);
// https://immerjs.github.io/immer/
// npm install immer