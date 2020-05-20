
    // 1. Create a function called divide that takes 2 numbers as parameters. The function should divide the first number by the second number and return the result.
    //  If the second number is a 0, the function should throw an Error object.

    // const divide = (num1, num2) =>{
    //     if (num2 == 0){
    //         throw  new Error("num2 should not be Zero");


    //     }
    //     return parseInt(num1) / parseInt(num2);

    // } 

    // console.log(divide(23,0));

  
    
    // Call the above function inside a try/catch block. You should log the exception message and then continue with the program.


    const divide = (num1, num2) =>{
        if (num2 == 0){
            throw  new "Error: num2 should not be Zero"


        }
        return parseInt(num1) / parseInt(num2);

    } 

    let myDivison;
    try {
        myDivison = divide(12,0);
    } catch (e) {
        console.log(e.message)
    } finally {
        if(!myDivison) {
            myDivison = 0;
        }
    }

    console.log(myDivison);
