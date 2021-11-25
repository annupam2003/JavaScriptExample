//function inside function

const app=() =>{

    const addTwo=(num1,num2)=> num1+num2;

    const display = (num3)=>console.log(num3);

    console.log('inside app');
    display(addTwo(5,6));
}

//console.log(addTwo(5,6));

app();