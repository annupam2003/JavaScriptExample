// object destructuring

const person ={
    name:'kumar',
    age:18,
    area:'mayur vihar',
    city:'delhi'
}

var { name, age }=person;
console.log(name);
console.log(age);

var { name:myName, age:myAge }=person;  // differ variable name
console.log(myName);
console.log(myAge);

var { name, age ,...restProp}=person;   //Rest all property in differ object
console.log(restProp);