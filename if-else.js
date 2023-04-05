
// wap to  find the difference between two number 

// console.log("the difference of ", 10 - 5);
// console.log("the difference of ", 10 - 10);
// console.log("the difference of ", 10 - 9);






/* tempalte literal ,   back tick `  */


let name = "Ram"
let last_ame = "Sharma"
// console.log('full name is ' + name + " " + last_ame);
// console.log(`full name is ${name} ${last_ame} `);





/*
 num1 = 10
 num2 = 6
*/

function diff(num1, num2) {
    console.log(` the difference of ${num1} - ${num2} is ${num1 - num2}  `,);
}

// diff(10, 6) // 10, 6 here is arguement
// diff(10, 5)
// diff(100, 50)


/* conditions - control flow */


/* 
    if(<condition>){
        // code will run if our condition is true
    }else{
        // this code will run if our condition is false. 
    }

*/
// let will_rain = false

// if (will_rain) {

//     console.log("take umbrella");

// } else {
//     console.log("no need");
// }




let will_rain = false
let has_probability = true

// if (will_rain) {
//     console.log("take umberlla");
// } else if (has_probability) {
//     console.log("your choice");
// } else {
//     console.log("no need ");

if (will_rain) {
    console.log("take umberlla");
} else {

    if (has_probability) {
        console.log("your choice");
    } else {
        console.log("no need ");
    }
}

/* Ternary operator  */


let todo_list = [
    {
        "userId": 1,
        "id": 1,
        "title": " html",
        "completed": true
    },
    {
        "userId": 1,
        "id": 2,
        "title": " css ",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "js",
        "completed": false
    },
]

/* output 
    html is completed 
    css is compolted 
    js is pending
*/














