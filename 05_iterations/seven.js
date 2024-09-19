const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNumbers.map( (num) => num + 10 )
//OR
// const newNums = myNumbers.map( (num) => {return num + 10} ) // { } scope open so return is must.
// console.log(newNums);



// const newNums = myNumbers
//                 .map( (num) => num * 10)
//                 .map( (num) => num + 1)  //num becomes update value from first map 

// console.log(newNums);
               


// map with filters
const newNums = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1) 
                .filter( (num) => num > 40)

console.log(newNums);
                