
for(let index = 0; index < 10; index++){
    if(index == 5){
        // console.log("5 is the best number");
    }
    // console.log(index);
}


for(let i = 1; i <= 10; i++){
    // console.log(`Outer loop value: ${i}`);
    for(let j = 1; j <= 10; j++){
        //console.log(`inner loop value: ${j} and Outer loop value: ${i}`);
        // console.log(i + "*" + j + '=' + i*j);
    }
}



let myArray = ["ironman","thor","spiderman"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if(index==5){
        // console.log("Detected 5");
        break;
    }
    // console.log(`value of i is ${index}`);
}


for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log("Detected 5");
        continue;
    }
    console.log(`value of i is ${index}`);
}