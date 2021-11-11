// if else condition (>, <, >=, <=)
let age=18;

if(age > 18)    //if condition is true
{
    console.log("Lets play game");
}
else{
    console.log('Sorry boss.')
}

/**truthy and falsy value */

/* 
falsy:
    -''
    -0
    -false
    -null
    -undefiny
truthy:
    -'abc'
    - n,4,3,2,1,-1,-2,-3 -n
    -true
*/

//falsy
let name
if(name)    //undefine
{
    console.log('conditon true');
}
else{
    console.log('condition false');
}
name=null;
if(name)    //null
{
    console.log('conditon true');
}
else{
    console.log('condition false');
}
name='';
if(name)    //empty string
{
    console.log('condition true');
}
else{
    console.log('condition false');
}
name=0;
if(name)        //zero number
{
    console.log('condition true');
}
else{
    console.log('condition false');
}
name=false;
if(name)        //boolean value
{
    console.log('condition true');
}
else{
    console.log('condition false');
}
//truthy
name='abc';
if(name)    //string
{
    console.log('condition true');
}
else{
    console.log('condition false');
}
name=-3;
if(name)        // number
{
    console.log('condition true');
}
else{
    console.log('condition false');
}
name=true;
if(name)        //boolean value
{
    console.log('condition true');
}
else{
    console.log('condition false');
}