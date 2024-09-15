// singleton : Made by constructor(object)
//Object.create

//object literals

const  mySym = Symbol("key1");
const jsUser = {
    name: "Ravi",
    "full name" : "Ravi kumar",
    age: "20",
    [mySym] : "mykey1", //Symbol data type we declare this way
    location: "Begusarai",
    email: "raju@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["Monday","Saturday",]
};

// console.log(jsUser);
// console.log(jsUser.email);

// console.log(jsUser["email"]);
// square notation
// for what - if property declared like = "full name" : "Ravi Kumar" then we can not access by dot.
// console.log(jsUser["full name"]);

// console.log(jsUser[mySym]);
// console.log(jsUser);
//access mySym by this way

jsUser.email = "raj123@gmail.com"
//Email overwrite
// console.log(jsUser.email);

// Object.freeze(jsUser);
//we can not replace any value.

jsUser.greeting = function(){
    console.log("Welcome users");
}
// console.log(jsUser.greeting);
// [Function (anonymous)]

console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`Welcome ${this.name}`); // Reference a current object value
}
console.log(jsUser.greeting2());


