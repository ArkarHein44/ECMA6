// Method Chaining

class Gamer
{
    constructor(username){
        this.username = username;
        this.points = 0;
    }

    login(){
        console.log(`${this.username} just logged in`);
        return this; // Enabled chainging
    }

    logout(){
        console.log(`${this.username} just logged out`);
        return this; // Enabled chaining
    }

    giftpoint(){
        this.points += 10;
        console.log(`${this.username} got ${this.points} gift points`);
        return this; // Enabled chaining
    }
}

const gamerObj = new Gamer("Thura");

// gamerObj.login();
// gamerObj.giftpoint();
// gamerObj.giftpoint();
// gamerObj.logout();

gamerObj.login().giftpoint().giftpoint().logout();
// Thura just logged in
// Thura got 10 gift points
// Thura got 20 gift points
// Thura just logged out

class User
{
    constructor(){
        this.info = {};
    }

    setname(name){
        this.info.name = name;
        return this;
    }

    setage(age){
        this.info.age = age;
        return this;
    }

    setcity(city){
        this.info.city = city;
        return this;
    }

    getinfo(){
        return this.info;
    }
}

const getuserdata = new User()
                    .setname("Tun Yati")
                    .setage(25)
                    .setcity("Mandalay")
                    .getinfo();

console.log(getuserdata); // { name: 'Tun Yati', age: 25, city: 'Mandalay' }