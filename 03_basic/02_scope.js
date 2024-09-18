/*we will not use var -> var is function-scoped, meaning if you declare a var inside a function,
it's scoped to that entire function, 
even if it appears inside a block like if or for. */


//Global scope
a = 400;

//Block scope
if (true) {
    let a = 100;
    const b = 200;
    // console.log("Inner:",a);
}
// console.log(a);
// console.log(b); //Error

//Nested scope
function one(){
    const username = "Ravi";
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);  //ERROR
    two();
}
// one();


if(true){
    const username = "ravi";
    if(username === "ravi"){
        const web = "linkedin";
        // console.log(username+web);
    }
    // console.log(web); //ERROR 
}
// console.log(username); // ERROR


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(addOne(10));
function addOne(num){
    return num+1;
}


//console.log(addTwo(20));   
//ERROR -> can not access before function declaration when function hold in a variable
const addTwo = function(num){
     return num+1;
}
console.log(addTwo(20));
