const number = 200;
// console.log(number);

const score = new Number(200);
// console.log(score);

// console.log(score.toString());
// console.log(score.toFixed(2));  //200.00

const otherScore = 129.896
// console.log(otherScore.toPrecision(4));

const hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN')); //by-default us standard


//SOME MORE ON NUMBERS-- WE Can check in console like- Numbers.MAX_VALUES, Numbers.MAX_SAFE_INTEGER

//+++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
// see all methos in browser console

// console.log(Math.abs(-4)); // change in positive vaue
// console.log(Math.round(4.2));  //4
// console.log(Math.ceil(4.2));  // 5 - Always top value
// console.log(Math.floor(4.9)); // 4 - Always lowest value

console.log(Math.random());
// Always gives value between 0 and 1.

console.log((Math.random()*10)+1);
// value between 1 to 9 .

console.log(Math.floor(Math.random()*10)+1);
//Decimal value ingnored

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);
//value between 10 to 20 , where minnum 10










