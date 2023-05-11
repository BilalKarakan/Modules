import { randomNumber, arrayASC, arrayDESC } from "./sorting/arraySort.js";

const numbers = [];

for(let i=0; i<=10; i++){
    numbers.push(randomNumber(100));
}

console.log("Random Numbers: ", numbers);
console.log("Increasing Numbers: ", arrayASC(numbers));
console.log("Decreasing Numbers: ", arrayDESC(numbers));