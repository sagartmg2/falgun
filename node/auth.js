const { log } = require("console")

const login = () => {
    console.log("login")
}

const signup = () => {
    console.log("code to signup")
}


// default export
// module.exports = signup 


/* named export */
module.exports = {
    "login": login,
    "signup": signup
}

