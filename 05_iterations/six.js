// const code = ["js","java","C++","Python"]
// const values = coding.forEach((item) =>{
//     console.log(item);
// })

// console.log(values);
//undefined
//forEach  does not return any value


//FILTER 

const numbers = [1,2,3,4,5,6,7,8,9,10];

// const newnums = numbers.filter( (num) => num > 4 )
// console.log(newnums);

//or we can write

const newnums = numbers.filter( (num) => {
    return num >4;
} ) 
// console.log(newnums);

//return a array of all value which is > 4.


//using forEach

// const newnumbers = []; 
// numbers.forEach( (num) => {
//     if(num > 4){
//         newnumbers.push(num);
//     }
// })
// console.log(newnumbers);



const books = [
    { title: "Book one", genre: "science", publication: "J.B. Lippincott & Co.", edition: 2001 },

    { title: "Book two", genre: "math", publication: "Secker & Warburg", edition: 1989 },

    { title: "Book three", genre: "english", publication: "T. Egerton, Whitehall", edition: 1989 },

    { title: "Book four", genre: "computer", publication: "Charles Scribner's Sons", edition: 2001 },

    { title: "Book five", genre: "science", publication: "Harper & Brothers", edition: 1970 },

    { title: "Book six", genre: "math", publication: "George Allen & Unwin", edition: 2003 },

    { title: "Book seven", genre: "english", publication: "The Russian Messenger", edition: 2001 },

    { title: "Book eight", genre: "computer", publication: "Little, Brown and Company", edition: 1970}

];
  
let userBooks = books.filter( (bk) => bk.genre == 'computer');
// console.log(userBooks);


userBooks = books.filter( (bk) => { 
    return bk.edition >= 2000 && bk.genre === "computer";
});
console.log(userBooks);

