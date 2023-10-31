const user =[{
    name: "Girish",
    email: "girish.test@test.com",
    hobbies: [
        {
            game: [{
                name:"Cricket",
                rank: 1
            },{
                name:"Ludo",
                rank:2
            }],
            
        }
    ]
} ,
{
    name: "Sanjay",
    email: "sanjay.test@test.com",
    hobbies: [
        {
            game: [{
                name:"Cricket",
                rank: 1
            },{
                name:"Ludo",
                rank:2
            }],
            
        }
    ]
}
]
// console.log(user[1].name);
console.table(user)