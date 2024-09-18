const user = {
    username: "Ravi",
    prince: 199,

    welComeMessage: function(){
        console.log(`${this.username},Welcome to Website`);   
        // console.log(this); 
        //'this' is reference of current context it will return all context defined in this scope
        
    }
}
// user.welComeMessage();
// user.username = "Krishna";
// user.welComeMessage();


// console.log(this);
//no any context declared in global scope so this will return empty {}.


function hello(){
    let username = "Ravi";
    // console.log(this.username);
    //this will show undefined,context works for objects

    // console.log(this);
    //this will show all related context
}
hello(); 



//ARROW Function++++++++++++++++++++++++++

// () => {}

const  drink = () => {
    let username = "Ravi";
    // console.log(this.username); 
    //this will show undefined,

    // console.log(this);
    //this will show empty {}
}
drink()



const addTwo = (num1,num2) => {
    return num1+num2;
}
// console.log(addTwo(5,10));

//Implicit return
// const addTwonum = (num1,num2) => (num1+num2);
// console.log(addTwonum(4,5));


const addTwonum = (num1,num2) => ({username: "Ravi"});
console.log(addTwonum(3,5));

