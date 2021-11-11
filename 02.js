/*

 intro to Datatype and variables
 DataType is:
 1 string
 2 number
 3 boolean
 4 object
 5 null
 6 undefined
 7 array
 8 symbol

 vabiable can store any datatype
*/
"use strict";
//Use Strict to follow the Javascript rule strictly

let name='baba';
let age=18;
let visible=true;
let address ={houseno:"12",floor:"1st floor",area:"east area",state:"delhi",country:"india"};
let nul=null;
let undef;
let course=["cSharp","java","php"];

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(visible));
console.log(typeof(address));
console.log(typeof(nul));
console.log(typeof(undef));
console.log(typeof(course));
console.log('datatype object vs array');
console.log(Array.isArray(address));
console.log(Array.isArray(course));

// firstName="baba";   //use strict for reduse naming convention mistakes
// FirstName="dup";   //use strict for reduse naming convention mistakes
// Firstname="Org";   //use strict for reduse naming convention mistakes