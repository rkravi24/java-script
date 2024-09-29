// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);
// we can not overide the value of py this a constant.
//Behind the scene

// const descripter = Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descripter);

/*
javascript defined some hardcore property on PI that donot allow to do operation on PI value.
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/


//we can also defined such type of properties.
const chai = {
    name: "masala chai",
    price: 70,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nahi bani")
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));



//change the property value.
Object.defineProperty(chai,'name',{
    // writable: false,
    enumerable: false
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));



//we can itterate by using "Object.entries(chai)"
for ( let [key,value] of Object.entries(chai)) {
    if(typeof value != 'function'){
        console.log(`${key}:${value}`);
    }
}

/*if we donot want loop on this then enumerable: false
here we set defineproperty only on name so name will be not iterate.

*/



