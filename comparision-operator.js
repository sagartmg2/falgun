

/* arthematic operator */
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(1 % 2); // % modulous  -> remainder 

console.log(10 / 3);
console.log(10 % 3);



/* comparision operator */  // always return boolean value
console.log(1 > 2);
console.log(1 < 2);
console.log(1 <= 1);
console.log(1 >= 1);
console.log(1 == 1); //  == equality operator
console.log("Hello" == "Hello "); // 
console.log(true == false); // 
console.log(true == true); // 


console.log(1 >= 1);
console.log(1 <= 1);




let marks = 39

let check_order = 1 > 2

if (check_order) {
    console.log("first digit greater");
} else {
    console.log("first digi smaller");
}


console.log(1 == "1"); // internally typecast  -. converting one dattype to another 
console.log(1 == "one"); // internally typecast  -. converting one dattype to another 


/* 
 
==  equality operator
===  strict equality opeator -> checks the data type too
*/

console.log("one" === "two"); // 
console.log(1 === "1"); // 
console.log(true == "true"); //  No typecast 



console.log(undefined == "undefined"); //  No typecast




let logged_user_id = 100

let product = {
    name: "watch",
    created_by: 100
}

let product2 = {
    name: "projector",
    created_by: 200
}


if (product.created_by == logged_user_id) {
    console.log("can etit / delte");
} else {
    console.log("forbidden - view only");
}


console.log(false ? "condition true " : "condition false");
console.log(product.created_by == logged_user_id ? "has access" : "access-deinfied");


// if(product.created_by == logged_user_id){
//     console.log("can etit / delte");
// }else{
//     console.log("forbidden - view only");
// }


// if(product2.created_by == logged_user_id){
//     console.log("can etit / delte");
// }else{
//     console.log("forbidden - view only");
// }


/* Ternary operator  */




/* falsy values */

