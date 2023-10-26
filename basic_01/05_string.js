const name = "Girish"
const repoCount = 50

console.log(`My name is ${name} and my repo count is ${repoCount}`); /* back text with String interpoation */

const gameName = new String('Girish-dj')
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const trimName = "     girish     "
// console.log(trimName.str.trim());
// console.log(trimName.trimEnd());
console.log(trimName.trimStart());

