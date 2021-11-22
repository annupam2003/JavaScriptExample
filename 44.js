// function

function func(){
    console.log('hello javascript');
}
func();

function addition(num1,num2)    //Parameter
{
    console.log(num1+num2);
}

addition(2,4);      //agrument

function additionTwoNum(num1,num2)
{
    return num1+num2;
}

const func1 = additionTwoNum(5,6);

console.log(func1);