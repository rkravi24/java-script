let myName = "Ravi    ";
let myCourse = "js   ";


/* we can remove extra space using trim but problem is we will need to write 
    trim with every string.
    eg - console.log(myName.trim().length)
         console.log(myName.trim().length)

    so we need to a method which remove extra space in all String.
    let we have a 'trueLength' method which will do this task.
*/

let myHeroes = ["thor","spiderman"];
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

//now this will error because their is no "ravi" property.
//console.log(heroPower.ravi());

//create property
Object.prototype.ravi = function(){
    console.log("I'm created");
}

// console.log(heroPower.ravi());

//we access a top level hierarchy Object and create a property for all. 
// console.log(myHeroes.ravi());


//Inheritance
const user = {
    name: "rk",
    email: "rk24@gmail.com"
}
const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment : 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = user;

// console.log(Teacher.email);

//MODERN SYNTAX
Object.setPrototypeOf(TeachingSupport, Teacher)




//+++++++++++++++ trueLength ++++++++++
//create property for all string

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is:${this.trim().length}`);
}
myName.trueLength();