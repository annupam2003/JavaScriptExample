//Map DataStructure
// Map have key value pair.Key has any type(string,number,bool,array, etc..)

const myMap = new Map();
myMap.set('name','kumar');
myMap.set('age','18');
myMap.set(1,'One');
myMap.set(2,'Two')
myMap.set(3,false);

console.log(myMap.get(3));

for(let key of myMap.keys())
{
    console.log(key);
    console.log(myMap.get(key));
}

const person={
    name:'Kumar',
    age:'18'
}
    
const uMap =new  Map();
uMap.set(person,{gender:'Male',salary:15000});

console.log(uMap.get(person).salary);
