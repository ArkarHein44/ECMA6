// Class 
// Primitive Type & Reference Type

// Primitive Type 
    // 1. string
    // 2. numbers
    // 3. boolean
    // 4. null
    // 5. undefined
    // 6. symbol

// Reference Type
    // 1. all types of objects 
        // a. object literals
        // b. arrays 
        // c. functions
        // d. date 
        // e. all other objects 

    let val1 = 100;
    let val2 = val1;
    console.log(`val1 value = ${val1}, val2 value = ${val2} `); // 100 100

    val2 = 300;
    console.log(`val1 value = ${val1}, val2 value = ${val2} `); // 100 300

    let obj1 = {name: "su su"};
    let obj2 = obj1; // obj2 points to obj1 ( same memory reference)

    // obj1.name = "Yamone"; // Yamone Yamone
    obj2.name = "Wouthmone";

    console.log(obj1.name); // Wouthmone
    console.log(obj2.name); // Wouthmone

    // => Object Literals 

    const clientOne = {
        // properties 
        username: "aungaung",
        email: "aungaung@gmail.com",

        // methods / member methods
        login(){
            console.log("You are logged in");
        },

        logout(){
            console.log("You are logged out");
        }
    }

    console.log(clientOne);
    console.log(clientOne.email.username, clientOne.email);
    clientOne.login();
    clientOne.logout();

    const clientTwo = {
        // properties 
        username: "aungaung",
        email: "aungaung@gmail.com",

        // methods / member methods
        login:()=>{
            console.log("You are logged in");
        },

        logout:function(){
            console.log("You are logged out");
        }
    }

    console.log(clientTwo);
    console.log(clientTwo.email.username, clientTwo.email);
    clientTwo.login();
    clientTwo.logout();

