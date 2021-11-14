//Break and Continue keywords

for(let i=0; i<=10; i++){
    if(i===4){
        break;  // exit for the loop
    }
    console.log('break '+i);
}

for(let i=0; i<=10; i++){
    if(i===4){
        continue;   // go to bottom of the loop
    }
    console.log('contineu '+i);
}