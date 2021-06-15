const qtdnotas = (valor) => {
    let qtdCem = 0, qtdCinc = 0, qtdCinq = 0, qtdDez = 0, qtdDois = 0, qtdVint = 0
    let final = valor
    while(valor != 0){
        if(valor >= 100){
            valor -= 100           
            qtdCem++
        }else if(valor >= 50){
            valor -= 50            
            qtdCinq++
        }else if(valor >= 20){
            valor -= 20            
            qtdVint++
        }else if(valor >= 10){
            valor -= 10
            qtdDez++
        }else if(valor >= 5){
            valor -= 5
            qtdCinc++
        }else if(valor >= 2){
            valor -= 2
            qtdDois++
        }
    }
    console.log(`O menor número de notas para o valor ${final} é: 
                <br>${qtdCem} notas de cem 
                <br>${qtdCinq} notas de cinquenta 
                <br>${qtdVint} notas de vinte 
                <br>${qtdDez} notas de dez 
                <br>${qtdCinc} notas de cinco 
                <br>${qtdDois} notas de dois`)
}


qtdnotas(35)