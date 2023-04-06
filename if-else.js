
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
        "completed": true
    },
    {
        "userId": 1,
        "id": 3,
        "title": "js",
        "completed": false
    },
]

console.log(todo_list[0]); // first element 
console.log(todo_list[0].completed); // true 

let given_condition = true
/* if (<condition>) */

if (given_condition) {
    console.log("truthy condition");
} else {
    console.log("false condition ");
}











// if (todo_list[1].completed) {  // if(true)
//     console.log(` ${todo_list[1].title} is  complted`);
// } else {
//     console.log(` ${todo_list[1].title} is  pending`);
// }


// if (todo_list[2].completed) {  // if(false)
//     console.log(` ${todo_list[2].title} is  complted`);
// } else {
//     console.log(` ${todo_list[2].title} is  pending`);
// }

/* output 
    html is completed 
    css is compolted 
    js is pending
*/

function printInfo(index) { // index here is called as parameter

    let todo_element = todo_list[index]

    if (todo_element.completed) {  // if(true)
        console.log(` ${todo_element.title} is  complted`);
    } else {
        console.log(` ${todo_element.title} is  pending`);
    }
}

printInfo(0) // 0 here is arguement
printInfo(1)
printInfo(2)








