// reduce method

const numbers=[1,2,3,4,5,10];

console.log(numbers.reduce((accumulator,currentValue) => accumulator+currentValue));

const userCart =[
    {productId:1, ProductName:'mobile', price:120},
    {productId:2, ProductName:'mobile', price:220},
    {productId:3, ProductName:'mobile', price:500},
    {productId:4, ProductName:'mobile', price:200},
    {productId:6, ProductName:'mobile', price:320},
];

console.log(userCart.reduce((t,c) =>{return t + c.price},0 ));