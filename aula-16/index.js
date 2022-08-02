const alunos = ['Maria', 'João', 'Bruna'];


console.log(alunos.slice(0,2)); //busca o valor do intervalo. 
delete alunos[0];
console.log(alunos); // O valor de 'Maria' vai ficar empty

alunos.push('Alberto'); //adiciona no final
alunos.unshift('Gabriela'); //adiciona no 1º elemento e desloca os demais.

const alunoRemovido = alunos.pop('Bruna'); //remove no final
//console.log(alunos.shift); // remove no 1º elemento e desloca os demais.
//console.log(alunoRemovido); 
//console.log(alunos); 


//console.log(alunos);