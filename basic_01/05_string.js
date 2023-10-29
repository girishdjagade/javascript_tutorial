const name = "Girish"
const repoCount = 50

// console.log(`My name is ${name} and my repo count is ${repoCount}`); /* back text with String interpoation */

const gameName = new String('Girish-dj')
// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
// console.log(newString)

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString)

const trimName = "     girish     "
// console.log(trimName.str.trim());
// console.log(trimName.trimEnd());
// console.log(trimName.trimStart());

// ****** at() ******

const sentence = "The quick brown fox jumps over the lazy dog."
let index = 0
let indexNeg = -3


const myFullName = "Girish Dilip Jagade"
let index2 = 8

// console.log(`Using an index of ${index2} the character returned is ${myFullName.at(index2)}`);
// console.log(`The character code ${myFullName.charCodeAt(index2)} is equal to ${myFullName.at(index2)}`);

// ********indexOf*********

const str = "Brave new world";

console.log(str.indexOf("v"));
console.log(str.indexOf("Brave"));