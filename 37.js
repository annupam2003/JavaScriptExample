//difference between dot vs bracket notation

const person ={
    name:'baba',
    age:18,
    'city name':'Delhi',
    hobbies:['music','sleeping','guitar']    
};

console.log(person);
// console.log(person.city name);  //Dot notation not posible
console.log(person["city name"]);

const key ='email';
const value ='abc@abc.com'
person[key]=value;

console.log(person);
console.log(person.email);