const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Ajay", "Amir", "Salman"]

const myArr1 = new Array(1, 2, 3, 4)

// console.log(myArr1);

myArr.push(6)
// console.log(myArr);
myArr.pop()
// console.log(myArr)
myArr.unshift(9);
// console.log(myArr);
myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(2));
// console.log(myArr.indexOf(3));

const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof newArr);


// *********Slice and Splice********

const fruit = ["apple", "banana", "cherry", "date"]
const newFruit = fruit.slice(0, 3)
// console.log(newFruit);
// console.log(fruit);

const animal = ["lion", "tiger", "elephent", "horse"]
const animalNew = animal.splice(1, 5, "camel", "jiraf")
// console.log(animalNew);
// console.log(animal);

// ***********Concat**********
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2, arr3)
// console.log(children);
// console.log(arr1);

// *****************Copywithin***************
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "peru", "chiku"];
// console.log(fruits.copyWithin(2));

// ***************Entries*************
const fruitNew = ["Banana", "Orange", "Apple", "Mango"];
const f = fruitNew.entries();

for (let x of f) {
//   console.log(x);
}

// *******************Every***********

const ages = [32, 33, 16, 40]

ages.every(checkage)

function checkage(age){
    return age > 18
}

// console.log(ages.every(checkage));
const ammounts = [1000, 1100, 500, 800, 1200, 555, 1500, 1555, 2000, 2100, 2500]

function bigAmmount(amt){
    return amt >=1000
}
// console.log(ammounts.filter(bigAmmount));
// console.log(ammounts);

// ****************Foreach******************
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }
function myFunction(item, index, arr) {
    arr[index] = item * 10;
}
// console.log(numbers);

// ********************From********************

let text1 = "girish"

const textArr = Array.from(text1)

// console.log(textArr);

// ****************Key*******************
const keyFruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = Object.keys(keyFruits);


let text = "";
for (let x of keys) {
  text += x + "<br>";
}
console.log(text);