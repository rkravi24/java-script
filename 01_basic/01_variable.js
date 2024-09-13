const accountId = 1234;
let emailId = "Ravi@gmail.com";
var password = "1234";
accountCity = "Begusarai";
//this will work but this is not a good practice.

let accountState;
//Undefined

// accountId = 12345; 
//We cannot change or update const variable value.

console.log(emailId);
console.table([accountId,emailId,password,accountCity,accountState]);

/*We will use let and const for variable declaration 
  because var create issue in block scop and function scope.*/