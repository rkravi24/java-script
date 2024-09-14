// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


// console.log("2">1);
// console.log("02">1);

console.log(null > 0);    //false
console.log(null == 0);    //false   
console.log(nul >= 0);    //true

//The reason is that an equality check == and comparision >< >= <= work differently.
//Comparision convert null to a number, treating it as 0.
//That's why "null >= 0" is true. 

// === Strict check
console.log("2" == 1);    //true
console.log("2" === 1);   //false






