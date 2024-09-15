//array
// js array-copy create shallow copies.
// shallow copy of an object is a copy whose properties share the same references.
// Deep copy of an object is a copy whose properties does not share the same references.

const arr = [0,1,2,3,4,5,6];
const arr2 = [2,3,"Ravi","92",8.4,'h'];
// console.log(arr);
// console.log(arr2);

const heros = ["Thor", "Iron-men","Krish"];
// console.log(heros);
// console.log(heros[0]);

//Array in consloe we can see all prototype and property.

const myArray = new Array(0,1,2,3,4);
// console.log(myArray[1]);

myArray.push(6);
// Push in the last
myArray.pop();
//Remove last element

myArray.unshift(9);
// push at first index
// console.log(myArray);

myArray.shift();
//Remove first index
// console.log(myArray);

// console.log(myArray.includes(6));
// true or false (boolean)

// console.log(myArray.indexOf(3));

const newArray = myArray.join();

// console.log(myArray);
//Array

// console.log(newArray);
//type change - String

//slice, splice
console.log("org",myArray);
const myn1 = myArray.slice(1,3);

console.log(myn1);
console.log("org", myArray);

const myn2 = myArray.splice(1,3);
//this also manupulate the original array
console.log(myn2);
console.log("org", myArray);





