// ES6

class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    nameUpperCase(){
        return  `${this.username.toUpperCase()}`
    }
}

const user1 = new User("Ravi","123@gmai.com","123");
console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.nameUpperCase());


//++++++++++++++++BEHIND TH SCENE+++++++++++++++
/*

function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.nameUpperCase = function(){
    return  `${this.username.toUpperCase()}`;
}

const tea = new User("rk","@101gmial.com","123");
console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.nameUpperCase());

*/