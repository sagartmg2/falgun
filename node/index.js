/* Global Object  in node  */


let person = {}

// console.log("")
// setTimeout()

console.log(__filename);
console.log(__dirname);

/* require, modules, export */


/* NODE MODULES  // js file
    - core module  // fs, path, http( express uses this http module )
    - third-party module  // eg bcrypt
    - local module
*/


/* signup feature 
        1.take feilds name, email, password(123456) from user
        2. create user  and store in database
        3. 123456 -> %^#FSGSDFT@#$%@#$SDFG  // econde/hasing  password

*/


const bcrypt = require("bcrypt")


bcrypt.hash("12345678", 10, function (err, hash) {
    // Store hash in your password DB.
    // console.log("hash", hash)
    // console.log("err", err)
});

const fs = require("fs")

fs.writeFileSync("custom.txt", "create file using core file system moduel")


const auth = require("./auth")
auth.signup()
auth.login()










