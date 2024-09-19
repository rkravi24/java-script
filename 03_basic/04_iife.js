// Immediately invoked function Expression (IIFE)
// sometimes global scope pollution occurs when variables and functions are declared in the global scope, which can lead to unintended behavior,To avoid this, an Immediately Invoked Function Expression (IIFE) is often used.

//syntax:
//named iife
(function tea(){
    console.log('DB CONNECTED');
    
})();
//we use ';' for ending the execution of this iife function.
//otherwise next line will not execute and create an error

//arrow function
//unnamed iife
( () => {
    console.log(`DB CONNECTED TWO`);
}) ();



( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('Ravi');
