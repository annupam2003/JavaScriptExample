// Lexical Scope

function myApp()
{
    const myVar = "value1";

    function myFunc()
    {
        const myVar = "value59";
        console.log('In Side mhFunc',myVar);
    }
    console.log(myVar);
    myFunc();
}

myApp();