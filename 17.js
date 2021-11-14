//nested if else

let num = 18;
let guess = Number(prompt('Guess a number'))

if(guess === num)
{
    console.log('Your guess is right');
}
else
{
    if(guess < num)
    {
        console.log('too low');
    }
    else
    {
        console.log('too high');
    }
}
