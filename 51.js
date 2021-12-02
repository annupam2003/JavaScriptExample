// default function

function addTwo(a,b){
    return a+b;
}
console.log(addTwo(10,20));
console.log(addTwo(10));


function sumTwo(a,b=0){
    return a+b;
}
console.log(sumTwo(10));