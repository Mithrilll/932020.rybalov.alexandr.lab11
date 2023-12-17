function getRandomNumber() {
    return Math.floor(Math.random() * 11);
}

let firstValue = getRandomNumber();
let secondValue = getRandomNumber();

const first = document.getElementById('first-value');
const second = document.getElementById('second-value');

first.innerText = firstValue;
second.innerText = secondValue;

const add = document.getElementById('add');
const sub = document.getElementById('sub');
const mult = document.getElementById('mult');
const div = document.getElementById('div');

add.innerText = firstValue + ' + ' + secondValue + ' = ' + (+firstValue + +secondValue);
sub.innerText = firstValue + ' - ' + secondValue + ' = ' + (+firstValue - +secondValue);
mult.innerText = firstValue + ' * ' + secondValue + ' = ' + (+firstValue * +secondValue);
div.innerText = secondValue == 0 ? 'Division by 0' : firstValue + ' / ' + secondValue + ' = ' + (+firstValue / +secondValue).toFixed(5);