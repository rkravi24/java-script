//syntax
/*
switch(key){
    case value:
        break;
    case value:
        break;
    case value:
        break;
    default:
        break;
}
*/

const month = 15;
switch(month){
    case 1:
        console.log("january");
            break;
    case 2:
        console.log("february");
            break;
    case 3:
        console.log("march");
            break;
    default:
        console.log("Not in list");
        break;  
}



const day = "sunday";
switch(day){
    case "sunday":
        console.log("holiday");
            break;
    default:
        console.log("working day");
            break;
}