/*
Rule for naming Variables
1 variable can not start with a number  but you can use number after the first char
2 you can start a varable name with alpha, _(underscore) & $(doller)
3 you can not use space in a variable (use snake case writing)
best way varible name use camelCase, it is not rule.

*/
//not start with number
//let 1firstName='baba';    //error

//start with alpha 
let firstName='baba';

//start with undersocre 
let _firstName='baba';

//start with doller
let $firstName='baba';

//not use space between variable
//let first Name='baba';        //error

// write snake case
let first_Name='baba';

//console.log(1firstName);
console.log(firstName);
console.log(_firstName);
console.log($firstName);
//console.log(first Name);
console.log(first_Name);