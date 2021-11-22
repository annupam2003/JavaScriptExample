//Nested Destructuring

const users=[
    {userid:'1',name:'kumar',salary:'10000'},
    {userid:'2',name:'singh',salary:'30000'},
    {userid:'3',name:'baba',salary:'50000'}
];

var [user1,user2,user3]=users;
console.log(user1);

var [{name},,{salary}]=users;
console.log(name);
console.log(salary);

var [{name:firstname,userid},,{salary}] = users;
console.log(firstname);
console.log(userid);
console.log(salary);