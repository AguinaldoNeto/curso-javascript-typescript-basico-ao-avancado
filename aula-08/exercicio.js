const nome = 'Aguinaldo';
const sobrenome = 'Neto';
const idade = 29;
const peso = 80;
const alturaEmM = 1.77;
const anoAtual = 2022;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = anoAtual - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', alturaEmM, 'e seu imc é', imc + '.');
console.log(nome,'nasceu em',anoNascimento + '.');

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmM} e seu imc é ${imc}.
${nome} nasceu em ${anoNascimento}.`)