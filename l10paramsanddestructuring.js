console.log("Rest Params & Destructuring");

const carobj = {
    brand: "Toyota",
    model: "Crown",
    engine: "Petrol",
    gearbox:"auto"
}

function taxi1({brand="BMW",model="X9",engine="EV",gearbox="automatic", price="$100,000"}){
    console.log(brand, model, engine, gearbox, price);
}

// taxi1(); // error
taxi1(carobj);  // Toyota Crown Petrol auto $100,000  

const cararrs = ["Honda", "Hondafit", "Hybrid", "Auto"];

function taxi2([brand="BMW",model="X9",engine="EV",gearbox="automatic", price="$200,000"]){
    console.log(brand, model, engine, gearbox, price);
}

// taxi2(); //error
taxi2(cararrs);  // Honda Hondafit Hybrid Auto $200,000