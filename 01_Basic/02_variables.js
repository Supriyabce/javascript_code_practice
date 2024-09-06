const accountId = 124443
let accountEmail = "s@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2    -  const value is not changed
accountEmail = "sup@gmail.com"
accountPassword = "234"
accountCity = "Patna"

console.log(accountEmail)

console.table([accountEmail,accountPassword,accountCity,accountState])  // display data in table format