'use strict';
console.log('room.js');

let aukstis = 10;
let plotis = 15;
let gylis = 10;

let turis = aukstis * plotis * gylis
let siena1 = aukstis * plotis
let siena2 = aukstis * gylis
let grindys = gylis * plotis
let perimeter = ((gylis * plotis) + (gylis * aukstis) + (aukstis * gylis)) * 2;
console.log(`Kambario turis yra: ${turis}, viena siena: ${siena1}, antra siena: ${siena2}, grindys: ${grindys}, perimetras: ${perimeter}.`)
console.log(typeof 'Labas rytas');
console.log(typeof true);
console.log(typeof (365/12));
console.log(typeof prompt("iveskite skaiciu"));
console.log(typeof window);
console.log(typeof console.log);
console.log(Number("123"));
console.log(Number("123z"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6/"3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" -2);
console.log("4px" -2);
console.log(7/0);
console.log("-9\n" + 5);
console.log("-9\n" - 5);
console.log(null + 1);
console.log(undefined + 1);