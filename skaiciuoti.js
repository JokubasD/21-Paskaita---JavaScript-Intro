'use strict';
console.log('main.js');


const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const calculateEl = document.getElementById('calculate');
const apskaiciuotaEl = document.getElementById('apskaiciuota');
const actionEl = document.getElementById('action');

function calculate(){
    console.log('calculate ran ===', actionEl.value)
    let rezultatas;
    if (actionEl.value === 'plius'){
        rezultatas = num1El.valueAsNumber + num2El.valueAsNumber
    } else if (actionEl.value === 'minus'){
        rezultatas = num1El.valueAsNumber - num2El.valueAsNumber
    } else if (actionEl.value === 'multiply'){
        rezultatas = num1El.valueAsNumber * num2El.valueAsNumber
    } else if (actionEl.value === 'divide'){
        rezultatas = num1El.valueAsNumber / num2El.valueAsNumber
    } else if (actionEl.value === 'power'){
        rezultatas = num1El.valueAsNumber ** num2El.valueAsNumber
    }

    console.log(rezultatas)
    apskaiciuotaEl.textContent = rezultatas
}
calculateEl.onclick = calculate;