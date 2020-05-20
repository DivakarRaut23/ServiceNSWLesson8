

// 1. Create a method called addNumbers. The function should take 2 numbers as its parameters and return the sum of those numbers. Both parameters should default to 0 if they are not provided.

// function addNumber(num1=0, num2=0){
//     return parseInt(num1) + parseInt(num2);

    
// }

// console.log(addNumber(32,47));






//2.  Create a method called sayHello with 2 parameters, name and greeting. The function should log the greeting followed by the name. The greeting parameter should default to "Hello".


function sayHello (name, greeting = "Hello"){

    console.log(`${greeting} ${name}`);

}

sayHello("Divakar");


