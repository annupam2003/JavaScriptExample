//for loop
let fruits =['apple','mango','grapes','banana'];
let xfruits=[];
console.log(fruits);

for(let i=0;i<fruits.length;i++)
    console.log(fruits[i]);
    
//clone array with for loop
for(let i=0;i<fruits.length;i++)
   xfruits.push(fruits[i]);
console.log(xfruits);