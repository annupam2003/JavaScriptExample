// multiple conditions (&&, ||)

let name='kumar';
let age=18;
/* && operator (all condition true)*/
if(name[0]==='k' && age >= 18)
{
    console.log('play game your are '+age);
}
else
{
    console.log('sorry under age '+age);
}

/* || operator (only one condition true) */
if(name[0]==='k' || age > 18)
{
    console.log('welcome '+name);
}
else
{
    console.log('Sorry '+name);
}