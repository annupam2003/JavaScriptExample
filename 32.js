//Array with while loop

const fruits =['apple','mango','grapes'];
const xfruits=[];
let i=0;
while(i<fruits.length){
    xfruits.unshift(fruits[i]);
    i++
}
console.log(xfruits);