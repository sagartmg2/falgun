
let color = "red"
let age = 20
let paid = true

/* varaibles */
/* data types
        primitive dataypes
            String  - text 
            number
                - inter // whole number
                - float,double // decimal ,
            boolean
            null
            undefined // js only


        non-primitive data types , collection , reference data-types 
            - object 
            - array 
*/



let data = null;
let brand; // declaration 

console.log(data)


let brand1 = "apple"
let brand2 = "samsung"
let brand3 = "lg"
let brand4 = "panasonic"

/* Array 
    - collection of differenct values
    - usually it is collection of similar data types 

    syntax
    let <varaible_name>  =  [   <element> ,<element> ]
*/



let datas = ["ram", 10, true]




/* object  

    syntax 
    let <obj_name> = {
        <key> or <property> or <attribute> : <value>
    }
*/


let name = "Ram"
let marriaged = false
let address = "putalisadak"


let proejctor_color = "white"
let proejctor_price = 50000
let proejctor_resolution = "1900"


let proejctor2_color = "balck"
let proejctor2_price = 10000

let white = "#FFFFF"



let projector2 = {
    color: "black",
    price: 50000,
    resolution: 1900,
    brands: ["lg", "samsung"]
}

let courses = ["css", "html", { name: "js" }, { name: "react" }]

// console.log(projector1)



// let brand_name = "Samsnug"
// brand_name = "panasonic"
// console.log(brand_name);



let brands = ["apple", "samsung", "lg", "sony"]
let numbers = [1, 2, 3, 10, 100]

/*
    Index in array 
     - always starts with 0 

     brand[0] // gives first element

*/

console.log("before - second element of brands is", brands[1]);

brands[1] = "panasonci"

console.log("after - second element of brands is", brands[1]);
console.log(brands);


let projector1 = {
    color: white,
    price: 50000,
    resolution: 1900,
}

console.log("projector1's price", projector1.price);










