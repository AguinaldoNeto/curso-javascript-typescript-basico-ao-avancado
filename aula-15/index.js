let num1 = 15.89456123;
let num2 = Math.floor(num1);
let num3 = Math.ceil(num1);
let num4 = Math.round(num1);
let num5 = Math.max(1,2,5,50,-1,-2,-3,-50);
let num6 = Math.min(1,2,5,50,-1,-2,-3,-50);
let num7 = Math.random();


console.log(num2); //15- Arredonda para um inteiro pra baixo.
console.log(num3); //16 - Arredonda para um inteiro pra cima.
console.log(num4); //16 - Arredonda para um inteiro mais próximo.
console.log(num5); // 50 - Pega o maior número da lista.
console.log(num6); // -50 - pego o menor número da lista.
console.log(num7); // gera número aleatórios entre 0 e 1. ex: 0.306117...