let num1 = 1;
let num2 = 2.5;
let num3 = 10.148561;
let num4 = num1 * 'ola';
let num5 = 0.5;
let num6 = num2 + num5; //2.5 + 0.5
let num7 = num5 + num6; //3.0 + 0.5 
let num8 = parseInt(num7); //peguei o 3.5 que é um float e fiz um parse alterando ele para int, com isso fiquei com 3.

console.log(num1.toString() + num2); // é realizada a concatenação.
console.log(num3.toFixed(2)); // 10.15 -- é realizado o arredondamento.
console.log(Number.isInteger(num1)); //true
console.log(Number.isNaN(num4)); // true
console.log(Number.isInteger(num6)); //true
console.log(Number.isInteger(num7)); //false
console.log(Number.isInteger(num8)); //true
