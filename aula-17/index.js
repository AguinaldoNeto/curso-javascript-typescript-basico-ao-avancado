function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(5, 5));

function subtracao(x = 5, y = 3) {
    const resultado = x - y;
    return resultado;
}

console.log(subtracao());

//função anônima
const raiz = function(n) {
    return n ** 0.5;
};

console.log(raiz(9));

//arrow function
const raizArrow = (n) => {
    return n ** 0.5;
};

console.log(raizArrow(4));
