let numbers = [10, 2, 4, 5, 6, 7, 8, 9, 10]

let dobuled_numbers = []

/* output = [2,4,8] */


// numbers[0] = numbers[0] * 2
// numbers[1] = numbers[1] * 2

/* numbers.length = 6 */

for (let index = 0; index < numbers.length; index++) {
    dobuled_numbers[index] = numbers[index] * 2
}


const doSomeTask = () => {
    console.log("doing it. ");
    // return () => {
    //     console.log("inner function")
    // }
}

setTimeout(doSomeTask, 1000)



console.log(numbers)
console.log(dobuled_numbers)


// array function 
/* map
        - basically a for loop
        - returns a new array of lenght of our original array
        - it can mutate each and every array elements
        - it leavs the perivious original array as it is. 
*/


const double = (num) => {
    return num * 2
}

let doubled_value = double(12)
console.log({ doubled_value });

// let numbers = [10, 2, 4, 5, 6, 7, 8, 9, 10]

// let doubled_array = numbers.map(double)
let doubled_array = numbers.map((num) => { return num * 2 })

console.log({ doubled_array });



let todos = [
    { name: "css", status: true },
    { name: "html", status: true },
    { name: "js", status: false },
]


// for (let index = 0; index < todos.length; index++) {
//     todos[index].status = todos[index].status ? "complted" : "in-comple"
// }


// todos.forEach((element, index) => {
//     console.log(element.name, index)
//     // todos[index].status = todos[index].status ? "complted" : "in-comple"
//     element.status = element.status ? "completed" : "in-complted"

// })

// todos.forEach(element => {
//     element.status = element.status ? "completed" : "in-complted"
// })


// todos.forEach(element => element.status = element.status ? "completed" : "in-complted")

// let todos = [
//     { name: "css", status: true },
//     { name: "html", status: true },
//     { name: "js", status: false },
// ]

console.log(todos);




// let todos = [
//     { name: "css", status: "complteed" },
//     { name: "html", status: "complated" },
//     { name: "js", status: "incomplete" },
// ]




// const sum = (num1, num2) => { return num1 + num2 }
const sum = (num1, num2, num3) => num1 + num2 + num3

console.log(sum(2, 3, 5));
console.log(sum(4, 3));


clauclateSum(1, 2, 3, 4, 5, 6, 7) // ...rest operator 


