// typeof Operator
// data types


let age=18;     //number is immutable
let num1='100'

console.log(typeof age);        //number
console.log(typeof num1);       //string

''+age;
console.log(typeof age);        //number due to immutable

let num2 = ''+age;
console.log(typeof age);        //number due to immutable
console.log(typeof num2);       //string

+num1;
num2= +num1;
console.log(typeof num1);       //string
console.log(typeof num2);       //number

console.log(typeof String(num2));   //convert to string
console.log(typeof Number(num2));   //convert to number