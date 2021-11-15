// clone Array

let myarray1 = ['item1','item2'];
let myarray2 = myarray1;

console.log("array1 is = "+myarray1);
console.log("array2 is = "+myarray2);

myarray1.push('item3');
console.log(myarray1 === myarray2); //array is reference type allocate same memory
console.log("array1 is = "+myarray1);
console.log("array2 is = "+myarray2);

let myarray3=['item1','item2','item3'];
console.log(myarray1 === myarray3); //New memory allocation
console.log("array1 is = "+myarray1);
console.log("array3 is = "+myarray3);

//clone Array
let myarray4=myarray1.slice(0);  // return string array
console.log(myarray1 === myarray4);
console.log("array1 is = "+myarray1);
console.log("array4 is = "+myarray4);
//clone Array
let myarray5=[].concat(myarray1); 
console.log(myarray1 === myarray5);
console.log("array1 is = "+myarray1);
console.log("array5 is = "+myarray5);
//clone Array
let myarray6=[...myarray1]; 
console.log(myarray1 === myarray6);
console.log("array1 is = "+myarray1);
console.log("array6 is = "+myarray6);

let myarray7 = ['item7','item8'];

//Adding two array
let myarray8=[].concat(myarray1,myarray7);
console.log("array8 is = "+myarray8);

let myarray9=myarray1.slice(0).concat(myarray7);
console.log("array9 is = "+myarray9);

let myarray10=[...myarray1,...myarray7];
console.log("array10 is = "+myarray10);