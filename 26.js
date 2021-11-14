//introll to arrays
// reference type
// array is mutable

//order collection of items

//string type of array
let fruits =['apple','mango','grapes']
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

let num =[1,2,3,4,5];
console.log(num);

let mixed = [1,2,3,4,'string',null,undefined];
console.log(mixed);

//changing in array (mutable)
console.log(fruits);    
fruits[1]='banana';
console.log(fruits);

//typeof
console.log(typeof fruits);         //return object type
console.log(Array.isArray(fruits)); //to check it is object