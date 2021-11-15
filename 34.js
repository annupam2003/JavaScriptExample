//Array with for in loop

const fruits =['apple','mango','grapes'];
const xfruits=[];
for(let index in  fruits){
    console.log(index)
    xfruits.unshift(fruits[index]);
}
console.log(xfruits);