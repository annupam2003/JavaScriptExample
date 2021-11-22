//object inside array

const users=[
    {userid:'1',name:'kumar',salary:'10000'},
    {userid:'2',name:'singh',salary:'30000'},
    {userid:'3',name:'baba',salary:'50000'}
];

for(let user of users){
    console.log(user.salary);
}