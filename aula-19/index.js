//Primitivos - string, number, boolean ...

const a = 'nome';
b = a;
console.log(a, b); //nome nome
b = 'Outro nome';
console.log(a, b); //nome, sobrenome

//Mutavel - array, object e function
const m = [1, 2, 3];
n = m;
console.log(m, n); // 123 123
n.push(4);
console.log(m, n); //1234 1234
m.pop(4)
console.log(m, n); //123 123

