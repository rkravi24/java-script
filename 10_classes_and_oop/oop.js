const user = {
    username: "Ravi",
    loginCount: 10,
    signIn: true,

    getUserDetails: function () {
        // console.log("details from DB");

        //Error
        // console.log(`Username: ${username}`);

        // console.log(`Username: ${this.username}`);

        // console.log(this);
    }
}

// console.log(user.username);
// user.getUserDetails();


//constructor function (new => keyword is a constructor function)
// const promisesOne = new Promise()
// const date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    return this;  //implicitly bydefault 
}

// const userOne = User("Ravi",10,true);
// const userTwo = User("Rk",8,false);

// console.log(userOne);
// without new keyword override the values
// new => always create a new instance

const userOne = new User("Ravi",10,true);
const userTwo = new User("Rk",8,false);
console.log(userOne);
console.log(userTwo);

