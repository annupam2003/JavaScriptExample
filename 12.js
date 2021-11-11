//comparison operator == vs ===

let num1='10'
let num2=10;

console.log(typeof num1)        //string
console.log(typeof num2);       //number

console.log(num1==num2);        //true  check only value ('10'==10)
console.log(num1===num2);       //false check value & datatype both('10'===10)

console.log(Number(num1)===num2);   //true

console.log(num1 != num2);      //false check only value ('10' != 10)
console.log(num1 !==num2);      //true check value & datatype ('10' !== 10)
console.log(Number(num1) !==num2);      //false check value & datatype (10 !== 10)
