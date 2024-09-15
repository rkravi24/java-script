//Date 
let myDate = new Date();
console.log(typeof(myDate));


console.log(myDate);    
//2024-09-15T11:41:44.972Z 

console.log(myDate.toString());
//Sun Sep 15 2024 11:45:06 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());     
// Sun Sep 15 2024

console.log(myDate.toLocaleString());   
//9/15/2024, 11:43:36 AM     

let myCreatedDate = new Date(2024,8,15);
console.log(myCreatedDate.toDateString());
//Sun Sep 15 2024

let myCreatedDate2 = new Date(2024,8,15,5,18);
console.log(myCreatedDate2.toLocaleString());
//9/15/2024, 5:18:00 AM

// let myCreatedDate3 = new Date("2024-09-15"); //YY-MM-DD
let myCreatedDate3 = new Date("09-15-2024");  //MM-DD-YY
console.log(myCreatedDate3.toLocaleString());


let myTimeSpan = Date.now();
console.log(myTimeSpan); 
//time in milisecond

console.log(myCreatedDate.getTime());  
//in milisecind

console.log(Date.now()); 
//Mili second

console.log(Math.floor(Date.now()/1000));
//in second


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate()); 
console.log(newDate.getDay());
// 0 -> Sunday

//Note - date and day start from 0.

newDate.toLocaleString("deafult",{
    weekday:"long", 
})









