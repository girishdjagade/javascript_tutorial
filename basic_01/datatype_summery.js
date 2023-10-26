const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id);
console.log(id === anotherId);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) Heap (Non Primitive)

let userOne = {
    email: "userone@gmail.com",
    upi: "userOne@rbl"
}
let userTwo = userOne
userTwo.email = "userTwo@gmail.com"

console.log(userOne);
console.log(userTwo);