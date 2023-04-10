
/*

varaible
let <variable_name>
const // cannot re-initialized

 data types
 string
 number
 boolean
 null
 undefined
 
 array   [index0,index1]   must know, access data inside an array also mutate
 object {key:value}       must know, access data inside an object  also mutate


condition, control flow - if -else 

    if(condition){
        console.log("do this if our condition satasfies")
    }else{
        console.log("do this if our condition is false")
    }

opeartor 
arthematic +
comparision
     ==
     ===
     <
     <=

loop
    -for loop -> when we know the number of iterations()
    - while loop

*/

let numbers = [1, 2, 3]
let courses = [
    {
        name: "Mern",
        duration: "2.5"
    },
    {
        name: "Graphic",
        duration: "2"
    }
]

// console.log(courses); // []
// // console.log(courses[0])  // {}
// console.log(courses[0].name)  // {}

/*  */


// console.log(courses);
// console.log(courses[0]);
// let first_course = courses[0]
// console.log(first_course);
// console.log(first_course.name);
// console.log(courses[0].name);

// console.log(`the duration of ${courses[0].name} is ${courses[0].duration} months `);
// console.log(`the duration of ${courses[1].name} is ${courses[1].duration} months `);




let todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "html",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "css",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "six",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "last element",
        "completed": false
    },
  
]


// if (todos[0].completed) {
//     console.log(`${todos[0].title} is complted  `);
// } else {
//     console.log(`${todos[0].title} is pending  `);
// }

// if (todos[1].completed) {
//     console.log(`${todos[1].title} is complted  `);
// } else {
//     console.log(`${todos[1].title} is pending  `);
// }

// if (todos[2].completed) {
//     console.log(`${todos[2].title} is complted  `);
// } else {
//     console.log(`${todos[2].title} is pending  `);
// }


function printStatus(index) {

    /* TERNARY OPErator */
    if (todos[index].completed) {
        console.log(` - ${todos[index].title} is complted  `);
    } else {
        console.log(` - ${todos[index].title} is pending  `);
    }
    
}

// printStatus(0)
// printStatus(1)
// printStatus(2)
// printStatus(3)


for (let index = 0; index < todos.length ; index++) {
    printStatus(index)
}












// for(starting_poit;condition:mutator)






