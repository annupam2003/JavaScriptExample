//find method

const myArray=['kumar','baba','Singh','Dev'];

console.log(myArray.find(x=>x.length===3));

const userCart =[
    {productId:1, ProductName:'mobile', price:820},
    {productId:2, ProductName:'mobile', price:220},
    {productId:3, ProductName:'mobile', price:500},
    {productId:4, ProductName:'mobile', price:200},
    {productId:6, ProductName:'mobile', price:320},
];

console.log(userCart.find(x=>x.productId===3));