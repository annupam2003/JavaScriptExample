// object
// object is refrence type
// object key by default sting datatype

const person ={
    name:'baba',
    age:18,
    hobbies:['music','sleeping','guitar']    
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

//Add new key in object(person)

person.gender='male';
console.log(person);

console.log(person["name"]);