
/* common js   vs ecmascript es module system
    require()       import

 */


// const signup = require("./auth")  // coommon js default import 

import {signup,login} from "./auth.js"
import bcrypttt from "bcrypt"

signup()
login()


bcrypttt.hash("myPlaintextPassword", 10, function(err, hash) {
    // Store hash in your password DB.
    console.log(hash);
});

