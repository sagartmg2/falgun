/* WAP to calculate sum of two numbers */

// 1,2
// 2, 4
// 5, 6
// 7,8
// 1,9

// console.log("john" + "doe")

// let num1 = 1
// let num2 = 2


/* DRY  - donot reapeat yourself  */


// console.log("the multiplication of 4 and 4 is " + (4 * 4));
// console.log("the multiplication of 5 and 5 is " + (5 * 5));
// console.log("the multiplication of 5 and 5 is " + (5 * 5));
// console.log("the multiplication of 5 and 5 is " + (5 * 5));
// console.log("the multiplication of 5 and 5 is " + (5 * 5));


function calculateMultiplication(num1, num2) {
    console.log("the multiplication of " + num1 + " and " + num2 + " is " + (num1 - num2));
}

// executing a function   or calling a function 
calculateMultiplication(2, 3)
calculateMultiplication(4, 4)
calculateMultiplication(5, 5)
