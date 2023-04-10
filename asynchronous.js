

// const sum = () => {
//     console.log("inside sum function ");
// }


// for (let index = 0; index < 1000; index++) {
//     console.log("loop", index);
// }

// console.log("end for loop");

// sum();

/* callback  // cb
        - a funciton passed as arguement to another funciton 
*/


console.log(1);
console.log(2);
console.log(3);

const doSomething = () => {
    console.log("do somehting");
}


/* asynchronous 
    - tasks that run in background
    - do not wait for itslef to be complete
    - do not block the tasks that are below it. 
*/

setTimeout(doSomething, 1000)   // 3 * 100 ms // 3 seconds

console.log("end of code ");


/* promise */



