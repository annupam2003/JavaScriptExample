//Array with while loop

const fruits =['apple','mango','grapes'];
const xfruits=[];
for(let item of fruits){
    xfruits.unshift(item);
}
console.log(xfruits);