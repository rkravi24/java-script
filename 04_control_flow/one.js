let userloggedIn = true;
if(userloggedIn){
    // console.log("user loggedIn");
}

// <, >, <=, >=, ==, ===, !=, !==

let temperature = 50;
if(temperature===45){
    // console.log("less then 50");
}
else{
    // console.log("execute");
}


const score = 200;
if(score>100){
    const power = "fly";
    // console.log(`user:${power}`);
}

// console.log(`user:${power}`); //ERROR power no in scope


//short hand notation
const balance = 1000;
// if(balance>500) console.log("test"),console.log("test2");
//this is not a good practice we will not use comma for seprate.
//this is good for only one statement.



// if(balance<500){
//     console.log("less than");
// }else if(balance <650){
//     console.log("less than 650");
// }else{
//     console.log("grater than 650");
// }


const userlogged = true;
const debitCard = true; 

if(userlogged && debitCard){
    // console.log("Allow to buy course");
}

const userloggedFromGoogle = true;
const userloggedFromEmial = false;

if(userloggedFromEmial || userloggedFromGoogle){
    // console.log("Allow");
}

