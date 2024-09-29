class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    createId(){
        return parseInt(Math.random()*1000)+1;
    }    
}

const user1 = new User("Ravi");
console.log(user1);
console.log(user1.createId());

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}
const t1 = new Teacher("Ravi","123@gamil.com");
console.log(t1);
console.log(t1.createId());