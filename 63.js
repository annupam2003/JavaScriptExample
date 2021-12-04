//some method
//condtion is true for one array element return true otherwise false

const myArray1=[1,3,5,7,9];
const myArray2=[1,3,5,9,10];

console.log(myArray1.some(x=>x%2===0));
console.log(myArray2.some(x=>x%2===0));

const userCart =[
    {productId:1, ProductName:'mobile', price:820},
    {productId:2, ProductName:'mobile', price:220},
    {productId:3, ProductName:'mobile', price:500},
    {productId:4, ProductName:'mobile', price:200},
    {productId:6, ProductName:'mobile', price:320},
];

console.log(userCart.some(x=>x.price <199));
console.log(userCart.some(x=>x.price >500));
console.log(userCart.some(x=>x.price <1000));
console.log(userCart.some(x=>x.price >1000));