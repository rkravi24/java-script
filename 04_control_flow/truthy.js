const userEmail = "r@vi.gmail";

if(userEmail){
    console.log("got user email");
} else{
    console.log("Don't have user email");
}


//falsy value:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
// "0", 'false, " ", [], {}, function(){}


const user = [];
if(user.length === 0){
    console.log("array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("empty object");
}

//NOTE:
// false == 0  -> true
// false == '' -> true
// 0 == ''     -> true 


//Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("grater than 80");

