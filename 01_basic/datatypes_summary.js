//Mainly data types divided into two types(Based on how data stores in memory).
// Primitive
// Non-primitive

// Primitive 
// 7 Types : String, Number, Boolean, null, undefined, Symbol. BigInt 

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id===anotherId);        //false

const BigInt = 1213232131136521734n;
// console.log(typeof BigInt);

let l = null;
// console.log(typeof l);  //Object



//Non-primitive (Reference)
// Array, Objects, Functions

const heros = ["Krish", "Thor", "Shaktiman", "Batman"];  //Array

// Object
let myObj = {
    name: "Ravi",
    age: 23,
}

const myFunction = function(){
    console.log("Hello World");
}
//console.log(typeof myFunction); //function (object function)

//console.log(typeof heros);      //object


//typeof Values
//https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (primitive) 
//Heap (Non-primitive)


//Stack create copy of a data and share
let name  = "Ravi";
let anotherName = name;
anotherName = "Tez";
// console.log(name);
// console.log(anotherName);


//Heap memory share reference of same data
//If we make changes to user2 then user1 will also be affected.
let user1 = {
    email: "raju@gmail.com",
    upi: 1234,
}

let user2 = user1;
user2.email = "rk123@gmail.com";
console.log(user2);
console.log(user1);

