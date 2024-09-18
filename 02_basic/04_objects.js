// singleton object
//const user = new user();

//Non-singleton
const user = {};
// {}

user.id = "101";
user.name = "Ravi";
loggedIn = false;

// console.log(user);

const newUser = {
    email: "raju123@gmail.com",
    fullName: {
        userName:{
            firstName: "Ravi",
            lastName: "kumar"
        }
    }
}

// console.log(newUser.fullName);
// console.log(newUser.fullName.userName);
// console.log(newUser.fullName.userName.firstName);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};

// const obj3 = {obj1,obj2};
// console.log(obj3);

const obj3 = Object.assign({},obj1,obj2);
//assign in a single array for two objects
// console.log(obj3);

const obj4 = {5:"e", 6:"f"};
const obj5 = {...obj1,...obj2,...obj4};
//assign in a single array for more than two objects
// console.log(obj5);


const oldUser = [
    {
        id: "101",
        name: "Ravi"
    },

    {
        id: "102",
        name: "Kumar"
    },

    {
        id: "103",
        name: "xavi"
    }
]

// console.log(oldUser);


// console.log(user);
//array of data

// console.log(Object.keys(user));
//array of keys

// console.log(Object.values(user));
//array of values

// console.log(Object.entries(user));
//[ [ 'id', '101' ], [ 'name', 'Ravi' ] ]

// console.log(user.hasOwnProperty("isLogged"));
//false

//we can see more on object methods in browser console.


const course = {
    courseName: "Js in Englis",
    price: 249,
    CourseInstructor: "Ravi"
}



//select a specific field
//object destructring

const {CourseInstructor} = course;
// console.log(CourseInstructor);

// or

const {CourseInstructor: instructor} = course;
// console.log(instructor);

//Api jasion formate 
// {
//     "name" : "Ravi",
//     "coursename" : "javascript",
//     "price" : "free"
// }

// [
//     {},
//     {},
//     {}
// ]
