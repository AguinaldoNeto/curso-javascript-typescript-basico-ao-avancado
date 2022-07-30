const numero = Number(prompt('Digite um número:')); //convertendo para number.
const numeroTitulo = document.getElementById('numero-titulo');
numeroTitulo.innerHTML = numero; //estou atribuindo o número digitado pelo usuário ao número titulo e o InnerHtml faz a inclusão dele na tela.

const texto = document.getElementById('texto');

texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É Nan: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`

