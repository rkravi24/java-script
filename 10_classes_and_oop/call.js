function setUSerName(username){
    this.username = username;
}

function createUser(username, email, password){
    // '.call'  hold the reference value
    // 'this' send current context for username
    setUSerName.call(this, username);
    this.email = email,
    this.password = password
}

const me = new createUser("Ravi","hello@gmail.com", "123");
console.log(me);