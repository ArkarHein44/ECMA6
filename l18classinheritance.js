// Class Inheritance

class Person
{
    constructor(firstname, lastname, city){
        this.firstname = firstname;
        this.lastname = lastname;
        this.location = city;
    }

    getfullname = title => `${title}.${this.firstname} ${this.lastname}`;
}

class JobTitle extends Person
{
    getjob = title => title;
}

const personObj = new Person("Aung", "Tun Tun", "Yangon");
console.log(personObj);
// Person {
//     getfullname: [Function: getfullname],
//     firstname: 'Aung',
//     lastname: 'Tun Tun',
//     city: 'Yangon'
//   }
console.log(personObj.firstname, personObj.lastname); // Aung Tun Tun
console.log(personObj.location); // Yangon
console.warn(personObj.getfullname("Mr"));
// Mr.Aung Tun Tun

const JobTitleObj = new JobTitle("Hsu", "Myat Chal", "Mawlamyine");
console.log(JobTitleObj);
// JobTitle {
//     getfullname: [Function: getfullname],
//     firstname: 'Hsu',
//     lastname: 'Myat Chal',
//     location: 'Mawlamyine',
//     getjob: [Function: getjob]
//   }
console.log(JobTitleObj.getjob("Manager")); // Manager

console.log(JobTitleObj.firstname, JobTitleObj.lastname); // Hsu Myat Chal
console.log(JobTitleObj.location); // Mawlamyine
console.log(JobTitleObj.getfullname("Ms"));
// Ms.Hsu Myat Chal

// console.log(personObj.getjob["HR"]); // runtime error

class User
{
    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    login(){
        console.log("You are logged in");
    }

    login(){
        console.log("You are logged out");
    }
}

class AdminUser extends User
{
    deleteuser(userobj){
        // console.log("Account Deleted");
        userarrs = userarrs.filter(userarr=>userarr.username !== userobj.username);
    }
}

const useroneObj = new User("hninhnin", "hninhnin@gmail.com");
const usertwoObj = new User("min min", "minmin@gmail.com");
const userthreeObj = new User("susu", "susu@gmail.com");

const adminuserObj = new AdminUser("kyaw kyaw", "kyawkyaw@gmail.com");

console.log(useroneObj, usertwoObj, userthreeObj);

console.log(adminuserObj);

let userarrs = [useroneObj, usertwoObj, userthreeObj, adminuserObj];
console.log(userarrs); // (4) [User, User, User, AdminUser]

adminuserObj.deleteuser(usertwoObj);
adminuserObj.deleteuser(adminuserObj);
console.log(userarrs); // (2) (User, User)

// 17CH 