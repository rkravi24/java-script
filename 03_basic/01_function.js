//Function


//function defination
function sayMyName(){
    console.log("Ravi");
    console.log("Kumar");
}
//function call
// sayMyName();  : Execute


//sayMyName : this is reference


//function defination with parameters num1 and num2
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

//function call with argument
// addTwoNumbers(3,4);

// const result = addTwoNumbers(5,4);
// console.log(`Result ${result}`);
//result undefined because function not returning any value.


// function addTwoNumbers(num1,num2){
//     return num1 + num2;
// }
// const result = addTwoNumbers(5,5);
// console.log(`Result ${result}`);

function loginUserMessage(username){
    if(username === undefined){     // or if(!=username)
        console.log("please enter user name");
        return;
    }
    return `${username} just login in`;
}

// console.log(loginUserMessage("Ravi"));
//Ravi just login in

// console.log(loginUserMessage(""));  
// just login in

// console.log(loginUserMessage());
//no any arguments its shows undefined
//undefined just login in


//function using rest operator parameter it returns array of parameters.
function cartPrice(...num1){
    return num1;
}

// console.log(cartPrice(100));
// console.log(cartPrice(1000,500,2500));
// console.log(cartPrice(1000,500,2500, 105.5,210.54));

function cartPrice(val1,val2,...num1){
    return num1;
}
// console.log(cartPrice(1000,500,2500,1100,350,400));
//first two values 1000 and 500 taken by val1 and val2 and Rest values return an array form by num1  



//Handle object+++++++++++++++++++++++++++++++++++++++++
const user = {
    username: "ravi",
    price: 299
}
function object(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// object(user);

//direct pass the object++++++++
object({
    username: "engineer",
    price: 150
})

//pass arrays+++++++++++
function returnFirstValue(getArr){
    return getArr[0];
}
const myNewArray = [200,400,600,800];
// console.log(returnFirstValue(myNewArray));
// or
// console.log(returnFirstValue([200,400,600,800]));
