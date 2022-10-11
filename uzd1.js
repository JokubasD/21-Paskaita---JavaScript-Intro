'use strict';
console.log('main.js');

let vardas = 'John';
let salis = 'Jamaika'
let megstamiausiasSkaicius = 777
let savaitesDiena = 5

console.log(vardas)
console.log(salis)
console.log(megstamiausiasSkaicius)
console.log(savaitesDiena)

console.log(megstamiausiasSkaicius * savaitesDiena)
console.log(megstamiausiasSkaicius + savaitesDiena)
let sentence = `As esu ${vardas}. Noreciau keliauti i ${salis}. Mano megstamiausias skaicius yra ${megstamiausiasSkaicius}.`

console.log(sentence); 

const resultEl = document.getElementById('result');
resultEl.textContent = sentence;

let num1 = 4
let num2 = 7
let num3 = 2
let num4 = 12

console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
let avg = (num1 + num2 + num3 +num4) / 4
console.log(avg)