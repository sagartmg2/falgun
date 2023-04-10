

const printMonthName = (input) => {

    let month_name = null
    switch (input) {
        case 1:    // if(input === 1)  if( 2 > 1) XX  if (input === true) XX
            month_name = "janurary"
            break;
        case 2:
            month_name = "Feb"
            break;
        default:
            month_name = "Invalid input"

    }

    return month_name

}


// let month = printMonthName(true)
// console.log({ month })




/* Falsy values */
let age = 15
let consent = true


/* LOGICAL OPEARTORS  
    AND  &&
        - should meet all the conditions
    OR ||
        - returns true value if any one of the condition is true
    NOT   !
     - returns the negative value of provided input
*/


if (age >= 20 || consent) {
    console.log("he can ")
} else {
    console.log("he cant");
}




let numbers = [1, 2, 3, 10, 20]


/*  array , index,mutation, loop */


console.log(dobuled_numbers) // [2,4,6,20,40]


let whole_numbers = [1,2,3,4,5,6,7,8]
console.log(even_numbers) = [2,4,6,8]








