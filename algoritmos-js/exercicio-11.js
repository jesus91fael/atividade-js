let lista = []
let tamanhavet = 10000
let soma = 0

function arrayrandom() {
     return Math.floor(Math.random() * 65536)
}

for (let i = 0 ; i < tamanhavet ; i++){
    if(arrayrandom() > 1){
     lista.push(arrayrandom());
     soma += lista[i]
    }
     

}

console.log(lista)

console.log(`O maior número do array é ${soma}`)
