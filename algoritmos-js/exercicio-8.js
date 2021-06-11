let lista = []

function arrayrandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0 ; i < 10 ; i++){
    lista.push(arrayrandom(1,100));
}

console.log(lista)
console.log(lista.reverse())