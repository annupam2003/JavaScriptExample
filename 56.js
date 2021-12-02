const numbers=[4,2,6,8];

function myFunc(number, index){
    console.log(`index is ${index} and number is ${number}`);
}

numbers.forEach(myFunc);

numbers.forEach((n, i)=>console.log(`index is ${i} and number is ${n}`));

const users = [
    { firstName: 'kumar', age:98},
    { firstName: 'singh', age:34},
    { firstName: 'baba', age:55},
    { firstName: 'rana', age:65},
]; 

users.forEach((user) => console.log(user.firstName));