//Function type 1

function sayHello(){
    console.log("HIII");
}
//Function type 2

sayHello();
function add(num1,num2){
    console.log("Addition="+num1+num2);
}
//Function type 3 

add(2,7);
function mulitply(num1,num2){
    return num1*num2;
}
let a=mulitply(3,10);
console.log(1);
// Functions are first class citizens as they can be stored in variable

let x=function mulitply(num1,num2){
    return num1-num2;
}
console.log(x(15,2));

//IIFE Immediately Invoked Function Expression
(function div(num1,num2){
    console.log(num1/num2)
})(10,5);