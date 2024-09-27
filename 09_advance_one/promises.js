/*The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.*/
/*A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed. */


/*create promises*/
// const promisesOne = new Promise(function(resolve,reject){
//     //Do async task
//     // connect db
//     setTimeout(function(){
//         console.log('Async task is complete');
//         //after resolve call .then method will be execute.
//         resolve();
//     },1000)
// });

// promisesOne.then(function(){
//     console.log("promises consumed");
// })

/*second promise*/
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Asunc task-2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })


/*third promise*/
// const promisesThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "Ravi", email: "rk@gmail.com"});
//     },1000)
// })
// promisesThree.then(function(user){
//     console.log(user);
// })


/*fourth promise*/
// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:"Ravi", pass:"123"});
//         } 
//         else{
//             reject(`ERROR: Something went wrong`);
//         }
//     },1000);
// })

// promiseFour
// .then((user) =>{
//     console.log(user);
//     return user.username;
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(err){
//     console.log(err);
// })
// .finally(() => console.log(`the promises either resolve or reject `));


/*promise five*/
// async function getAllUsers() {
//     try{
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//         const data = await response.json();
//         console.log(response);
//     } catch(error){
//         console.log("E:",error);
//     }
// }
// getAllUsers();

/* async wait syntax */
// async function consumePromiseFive() {
//     try{
//         const response = await promiseFive;
//         console.log(response);
//     } catch(error){
//         console.log(error);
//     }
// }
// consumePromiseFive();


/*next class*/
// async function getAllUsers() {
//     try{
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//         const data = await response.json();
//         console.log(response);
//     } catch(error){
//         console.log("E:",error);
//     }
// }
// getAllUsers();


//OR 

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})


