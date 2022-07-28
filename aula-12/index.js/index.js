let valorA = 'A';
let valorB = 'B';
let valorC = 'C';
console.log(valorA, valorB, valorC);

/*Mais clássica*/
valorAA = valorA
valorA = valorB;
valorB = valorC;
valorC = valorAA;
console.log(valorA, valorB, valorC);

/*Mais moderna*/
[valorA, valorB, valorC] = [valorB, valorC, valorA];
console.log(valorA, valorB, valorC);
