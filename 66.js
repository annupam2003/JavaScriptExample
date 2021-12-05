// itrables
// What is Array Line object 
// whose varibale have length property and value can acces by index call array like object; 
// example string;

const fName='kumar';
for(let n of fName)
    console.log(n);

const myArray =[1,2,3,4,5,6,7,9];
for(let n of myArray)
    console.log(n);

// object is not itrable
const myObject ={
    key1:'test1',
    key2:'test2',
    key3:'test3'
}

for(let n of myObject)
console.log(n);