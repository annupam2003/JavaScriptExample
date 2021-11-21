//spread operator in array and object

const array1=[1,2,3];
const array2=[5,6,7];

const newarray =[...array1,...array2];
console.log(newarray);

const newarray2=[..."abcdefg"];
console.log(newarray2);

const newarray3=[..."123456789"];
console.log(newarray3);

const obj1={
    key1:'value1',
    key2:'value2',
    key1:'value40'      //overwrite key1
}
console.log(obj1);
const obj2={
    key1:'value3',
    key2:'value4',
    key3:'value5',
}
console.log(obj2);
//concatnaion two objects
const newObj={...obj1, ...obj2};    //object2 overwrite object1
console.log(newObj);

//array to object
const newObj2={ ...newarray2};
console.log(newObj2);