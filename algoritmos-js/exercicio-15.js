const indicePoluicao = (indice) =>{
    if(indice >= 0.5){
        console.log('Todos os 3 grupos devem suspender suas atividades')
    }else if(indice == 0.4){
        console.log('Grupos 1 e 2 devem suspender suas atividades')
    }else if(indice == 0.3){
        console.log('Grupo 1 deve suspender suas atividade')
    }else{
        console.log('Nível de poluição está aceitável')
    }
}


indicePoluicao(0.2)
indicePoluicao(0.5)