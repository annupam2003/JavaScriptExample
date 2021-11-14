//Data Type Primitive vs Reference

//Primitive Type
let num1 = 6;
let num2 = num1;

console.log("value of num1 is = "+num1);
console.log("value of num2 is = "+num2);

num1++;
console.log("value of num1 is = "+num1);
console.log("value of num2 is = "+num2);

//Reference Type
let myarray1 = ['item1','item2'];
let myarray2 = myarray1;

console.log("array1 is = "+myarray1);
console.log("array2 is = "+myarray2);

myarray1.push('item3');
console.log("array1 is = "+myarray1);
console.log("array2 is = "+myarray2);