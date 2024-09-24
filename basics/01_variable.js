const accountId=1445
let accountEmail="acacia2023@gmail.com"
var accountPassword="acacia"
accountCity="jaipur"
let accountState;

// accountId = 2 - not allowed

accountEmail = "hc"
accountPassword = "25167"
accountCity = "newyork"

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId)
console.table([accountEmail, accountPassword, accountCity, accountState])