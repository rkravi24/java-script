const name = "Ravi";
const count = 20;

// console.log(name+count);

console.log(`Hello my nam is ${name} and my repo count is 10`);

const newName = new String(`Rkravi`);

//string methods 

// console.log(newName.length);
// console.log(newName.toUpperCase());
// console.log(newName.charAt(1));
// console.log(newName.indexOf(`v`));

const newString = newName.substring(0,4);
// console.log(newString);

const anotherString = newName.slice(-6,3);
// console.log(anotherString);


const myName = "     Ravi           ";
console.log(myName.trim());

const url = "https://ravi.com/ravi%10raj";

const url2 = url.replace('%10','-'); //return a new string

// console.log(url.replace('%10','-'));

console.log(url);  //old value
console.log(url2); //new value

console.log(url.includes('ravi'));   //true

const subName = "computer-Math-Physics-chemistry";
console.log(subName.split('-'));    //Return a array



