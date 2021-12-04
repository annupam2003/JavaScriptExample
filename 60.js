//short method

const numbers=[9,5,1200,400,3000];
const names=['kumar1','ram','mohan','ravi','singh','Kumar2'];
console.log(numbers.sort())
console.log(names.sort())

//if a-b is posative than swaping --- b,a
//if a-b is negarive or zero no change ---a,b

console.log(numbers.sort((a,b)=>a-b));
console.log(numbers.sort((a,b)=>b-a));


const userCart =[
    {productId:1, ProductName:'mobile', price:820},
    {productId:2, ProductName:'mobile', price:220},
    {productId:3, ProductName:'mobile', price:500},
    {productId:4, ProductName:'mobile', price:200},
    {productId:6, ProductName:'mobile', price:320},
];

console.log(userCart.sort((a,b)=>a.price - b.price));