class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,name,password){
        super(username)
        this.email = this.email
        this.password = password
    }

    addCourse(){
        console.log("new course added");
    }
}

const chai = new Teacher("Ravi","123@gmail.com","123");
// console.log(chai);
// chai.addCourse();
// chai.logMe();

// const masalaChai = new User("Ravi");
// console.log(masalaChai);
// masalaChai.logMe();


console.log(chai instanceof Teacher);
console.log(chai instanceof User);