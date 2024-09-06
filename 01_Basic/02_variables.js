const accountId = 124443
let accountEmail = "s@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;   // always gives value undefined

// accountId = 2    -  const value is not changed
accountEmail = "sup@gmail.com"
accountPassword = "234"
accountCity = "Patna"

/* prefer not to use var, bcz of issue in block scope and functional scope */

console.log(accountEmail)

console.table([accountEmail,accountPassword,accountCity,accountState])  // display data in table format