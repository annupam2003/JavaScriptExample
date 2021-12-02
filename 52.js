//rest parameters

function myfun(a,b,c){
    console.log(a)
    console.log(b)
    console.log(c)
}
myfun(10,20,30);

function myfun(a,b,c,...d){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}
myfun(10,20,30,40,50,60,70);


let num=0;
function addAll(...numbers){
    for(let n of numbers)
    num+=n;
}
addAll(10,20,30,40,50,60);
console.log(num);