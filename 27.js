//ADD AND REMOVE ITEMS(Array is mutable)

let fruits =['apple','mango','grapes']
console.log(fruits);

//PUSH  (Item add End of the array)
//push return a length
let returnElementPlace = fruits.push('banana');
console.log(fruits);
console.log(returnElementPlace);

//POP  (Item removed End of the array)
//pop method return a string
let elementName = fruits.pop();
console.log(fruits);
console.log(elementName);


//SLOWER THEN PUSH (because elment place is shifted)
//UNSHIFT  (Item add start of the array)
//unshift return a length
returnElementPlace = fruits.unshift('banana');
console.log(fruits);
console.log(returnElementPlace);

//SLOWER THEN POP (because elment place is shifted)
//SHIFT  (Item removed start of the array)
//shift method return a string
elementName = fruits.shift();
console.log(fruits);
console.log(elementName);