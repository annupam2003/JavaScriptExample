/*
Declare variable
var:    
   - Functional Scoped
let:
    - Block scoped  
    - Not re-declare
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
        //pi=0.12;          //no re-assign
        var fname='baba';
        let lname='rana';
        console.log(fname);
        console.log(lname);
    }
    console.log(fname);         //inside the funciton
   // console.log(lname);       //out side the Block
}
myFun();