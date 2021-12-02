// call back function

function myFun2(){
    console.log("inside my fun 2");
}
function myFunc(callback){
    console.log("there is normal function");
    callback();
}
myFunc(myFun2);