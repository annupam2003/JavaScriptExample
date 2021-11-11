// Object and arrays are mutable(change orignale variable)
// string is immutable(not change in orignale variable)

let firstName=' kumar singh ';      // Declare and assigne 
console.log(firstName.length);      // Display orignal length of string

// trim()
firstName.trim();    // Try to remove extra space(start and end)
console.log(firstName.length);  // No change because string is immutable

let name = firstName.trim();    //assigne new varable
console.log(firstName.length);  // no change orignal variable
console.log(name.length);       // Need new variable to store the effect

firstName = firstName.trim();   //or re-assigne new variable in memory because string is immutable
console.log(firstName.length);  //re-assigne variable show the new memory allocaiton

//ToUpperCase
firstName.toUpperCase();
console.log(firstName);

name =firstName.toUpperCase();
console.log(firstName);
console.log(name);

//slice(index,length)   index start with zero & length start with one
firstName.slice(1);
console.log(firstName);

name =firstName.slice(1);
console.log(firstName);
console.log(name);

name =firstName.slice(2,8);
console.log(firstName);
console.log(name);

name =firstName.slice(4,8);
console.log(firstName);
console.log(name);