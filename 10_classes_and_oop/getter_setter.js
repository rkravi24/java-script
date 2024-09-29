/*
class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}ravi`;
    }
    set password(value){
        this._password = value;
    }
}

const user1 = new User("Ravi","123");
// console.log(user1);
// console.log(user1.password);
// console.log(user1.email);

*/


//get and set through  property+++++++++++

/*
function User(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    })
}

const user1 = new User("ravi",123);
console.log(user1);
console.log(user1.email);

*/


//SETTER AND GETTER USING OBJECT

const User = {
    _email: "ravi@gmail.com",
    _password: 123,

    get email(){
        return this._email.toLocaleUpperCase();
    },
    set email(value){
        this._email = value;
    }
}

console.log(User.email);


const tea = Object.create(User);
console.log(tea.email);
