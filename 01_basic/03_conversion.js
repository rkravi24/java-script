let score = 33;

console.log(typeof score);
// console.log(typeof(score));  // both are same

 let score2 = "23";
 console.log(typeof score2);


 let valueInNumber = Number(score2);  //string to number
 console.log(typeof valueInNumber);
 

 let n = '123abc';
 let num  = Number(n);
 console.log(typeof num);  // Number
 console.log(num);  // but This will display Nan 


 let temp = null;
 console.log(typeof temp); //object
 
 let temp2 = undefined;
 console.log(typeof temp2); //Nan
 
 
 //"33" => 33
 //'123abc => Nan
 // true => 1; false=> 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "Ravi" => true 

let stringNumber = 24;
let s = String(stringNumber);  //number into stirng
console.log(s);
console.log(typeof s);  //string
