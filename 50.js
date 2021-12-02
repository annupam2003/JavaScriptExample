// Block scope vs function scope
// let and const are block scope
// var is function scope

//Block scope is not access outsie the block
{
    let fname='kumar';
    const age=18;

    console.log(`name is ${fname} and age is ${age}`)
}

{
    let fname='Singh';
    const age=22;

    console.log(`name is ${fname} and age is ${age}`)
}

let fname='baba';
const age=20;

console.log(`name is ${fname} and age is ${age}`)

//function block

function myfun()
{
    if(true){
        var name='kumar'
    }
    console.log(name);    
}
myfun();
