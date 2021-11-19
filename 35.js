// array destructuring 

const myArray=['myval1','myval2'];

let val1=myArray[0];
console.log(val1);
let val2=myArray[1];
console.log(val2);

let [val3,val4] =myArray;
console.log(val3);
console.log(val4);

const myArray2=['myval3','myval4','myval5','myval6'];

let [val5,val6,val7] =myArray2;
console.log(val5);
console.log(val6);
console.log(val7);

let [val8,,val9] =myArray2;
console.log(val8);
console.log(val9);

let [val10,val11,...mynewarray]=myArray2;
console.log(val10);
console.log(val11);
console.log(mynewarray);
