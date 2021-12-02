// param destructuring

const person ={
    name:"kumar",
    gender:"male"
}

function myfun(obj){
    console.log(obj.name);
    console.log(obj.gender);
}

myfun(person);

function myfun2({name:FirstName,gender}){
    console.log(FirstName);
    console.log(gender);
}

myfun2(person);