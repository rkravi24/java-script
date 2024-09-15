const marvel_heros = ["Thor","IronMan","Spiderman"];
const dc_heros = ["Batman","Superman","Falsh"];

// marvel_heros.push(dc_heros);
//marvel_heros contain array of dc_heros => [ 'Thor', 'IronMan', 'Spiderman', [ 'Batman', 'Superman', 'Falsh' ] ]
// console.log(marvel_heros);

const all_hero = marvel_heros.concat(dc_heros);
//Return a new array of all heros
// console.log(all_hero);

const all_new_heros = [...marvel_heros, ...dc_heros];
// output - [ 'Thor', 'IronMan', 'Spiderman', 'Batman', 'Superman', 'Falsh' ]
// In this method we can add more than two array
// eg - const all_new_heros = [...marvel_heros, ...dc_heros. ...Bollybood_heros];
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7, [8,9,[1,2]]];
const real_array = another_array.flat(Infinity);
//convert into a single array
// console.log(real_array);


console.log(Array.isArray("Ravi"));
//check array or not

console.log(Array.from("Ravi"));
//convert into array of each character

console.log(Array.from({name:"Ravi"})); 
//Note - here we need to specify - array of what keys or values , otherwise it will give an empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));





