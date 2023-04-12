
/* callback - function passed to another function as a variable */
/* forEach -- loop for all array elements */
/* map - same as foreach -> returns new array  */
/* filter -> creates a new array but unlike .map it doesnot 
retrns the same number of elements, rather filters and returns 

find -> it works just like the filter funciton -> returns only one matched element

*/




let todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "task one",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "task two",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "task three",
        "completed": true
    }
]

/* 
    there may be hundred of tasks.. 
    ternary operator. 
*/

/* 
    TODO:
    output
    task one is incomplete
    task two is incomplete
    task three is completed

*/
function printInfo(element) {
    console.log(element.title, element.completed)
}

// printInfo(todos[0])
// printInfo(todos[1])
// printInfo(todos[2])

// for (let index = 0; index < todos.length; index++) {
//     printInfo(todos[index])
// }

// todos.forEach(printInfo)
// todos.forEach((element) => { console.log(element.title) })
todos.forEach(element => console.log(element.title))


let numbers = [1, 2, 3, 4, 5, 6]

let even_numbers = []
// numbers.forEach(el => {
//     if (el % 2 == 0) {
//         even_numbers.push(el)
//     }
// })

// even_numbers = numbers.map(el => {
//     if (el % 2 == 0) {
//         return el
//     }
// })

// even_numbers = numbers.filter(el => {
//     if (el % 2 == 0) {
//         return el
//     }
// })


// even_numbers = numbers.filter(el => {
//     if (el % 2 == 0) {
//         return el
//     }
// })

// let numbers = [1, 2, 3, 4, 5, 6]

even_numbers = numbers.filter((el) => {
    if (el % 2 == 0) {
        return el
    }
    // return undefined
})

let string_values = [1, 2, 3, "four", 5, "six"].filter(el => {
    if (typeof (el) == "string") {
        return true
    }
})

let string_value = [1, 2, 3, "four", 5, "six"].find(el => {
    if (typeof (el) == "string") {
        return true
    }
})

console.log(string_value);



console.log(even_numbers); // [2,4,6]



