// map method   
// always creat new array

const numbers=[2,4,6,7,8];

const squareNumbers = numbers.map(number=> number*number);

console.log(squareNumbers);

console.log(numbers.map((n,i)=> `index: ${i} Value:${n} Squer: ${n*n}`));

let users = [
    { firstName: 'kumar', age:98},
    { firstName: 'singh', age:34},
    { firstName: 'baba', age:55},
    { firstName: 'rana', age:65},
]; 

 console.log( users.map((user) => user.firstName));