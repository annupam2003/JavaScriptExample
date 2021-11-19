const person ={
    name:'baba',
    age:18,
    'city name':'Delhi',
    hobbies:['music','sleeping','guitar']    
};

//object for in
for(let key in person)
    console.log(key);

for(let key in person)
    console.log(person[key]);

for(let key in person)
    console.log(`${key} : ${person[key]}`);

console.log(Object.keys(person));

//objects for of
for(let key of Object.keys(person))
    console.log(`${key} : ${person[key]}`);