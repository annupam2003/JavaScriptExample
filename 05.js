/*
Declare variable
const
   - Block scoped  
   - Not re-declare
   - Not re-assign
*/

const pi = 3.14;

function myFun()
{
    if(pi===3.14)
    {
       // pi=0.12;          //no re-assign
    }
    console.log(pi);         
}
myFun();