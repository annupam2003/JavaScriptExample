//set
//set don't have duplicate
//set don't have index
//set don't have grantee for item order(because the have not index)  
const numbers =new Set([1,2,3,1,6,4,5,6]);
console.log(numbers); 

const charset = new Set("abcderd");
console.log(charset);

numbers.add(['item1','item2']);
numbers.add(['item1','item2']); //allow becuase it is new array 

const items=['item3','item4'];
numbers.add(items);
numbers.add(items); //duplicate is not allow in SET

console.log(numbers); 

if(numbers.has(1))
    console.log('number one is found');


const myArray=[1,2,3,3,4,4,5,6,5,6,7,7,5,];
console.log(new Set(myArray));