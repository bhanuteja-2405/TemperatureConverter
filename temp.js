const iC = document.getElementById('ic');
const iF = document.getElementById('if');
const iK = document.getElementById('ik');
const RC = document.getElementById('rc');
const RF = document.getElementById('rf');
const RK = document.getElementById('rk');

function toFK(){
    const c = parseFloat(iC.value);
    const f = ((9/5)*c)+32;
    const k = c + 273.15;
    RC.innerHTML = `Temperature in Fahrenheit = ${f.toFixed(2)} & Temperature in Kelvin = ${k.toFixed(2)}`;
}
function toKC(){
    const f = parseFloat(iF.value);
    const c = (5/9)*(f - 32);
    const k = (5/9)*(f - 32) + 273.15;
    RF.innerHTML = `Temperature in Celsius = ${c.toFixed(2)} & Temperature in Kelvin = ${k.toFixed(2)}`;
}
function toFC(){
    const k = parseFloat(iK.value);
    const c = k - 273.15;
    const f = (k - 273.15)*(9/5) + 32;
    RK.innerHTML = `Temperature in Celsius = ${c.toFixed(2)} & Temperature in Fahrenheit = ${f.toFixed(2)}`;
}