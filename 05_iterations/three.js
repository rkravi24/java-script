// for of loop

const arr = [1,2,3,4,5]

for(const num of arr){
    // console.log(num);
}


const str = ["Ravi","Raju","Raushan"];
for(const s of str){
    // console.log(s);
}


const greetings = "Hello world"
for(const greet of greetings){
    // console.log(`character ot string ${greet}`);
}


//Maps

const map = new Map();
map.set('IN',"India");
map.set('USA',"United states of america");
map.set('Fr',"France");
map.set('IN',"India");
//only unique value 

// console.log(map);

for(const key of map){
    // console.log(key);
    // return a array
}


for(const [key,value] of map){
    // console.log(key,':-',value);
    //deconstruct the array
}



// const myObj = {
//     game1 : "cricket",
//     game2 : "Football",
//     gmae3 : "Hocky"
// }

// for(const game of myObj){
//     console.log(game);
//     //TypeError: myObj is not iterable
// }


// for in loop
const myObj = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift: "Swift by apple"
}

for(const key in myObj){
    // console.log(key);
    // only key
}

for(const key in myObj){
    // console.log(`key "${key}" shortcut is for "${myObj[key]}"`);
}



const a = ["java","C","C++","Python"];
for(const key in a){
     console.log(key);
    //print key (index)
}


for(const key in a){
    console.log(a[key]);
    //print value
}


for(const key in a){
    console.log(`key "${key}" and value "${a[key]}"`);
    //print key and value
}

