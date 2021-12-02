//function return function
// A function take a parameter or a function retur a function call high order function

function myFunc(){
    function hello(){
        console.log("High order function");
    }
    return hello;
}

const func = myFunc();
func();

function myFunc2(){
    return ()=>"High order function"   
}

const func2 = myFunc2();
console.log(func2());