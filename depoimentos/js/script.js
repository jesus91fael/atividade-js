let dep = document.querySelector('.c-box__dep')
let nome = document.querySelector('.c-box__autor')
let box = document.querySelector('.c-box')
let opcao = 1


let depoimento= (opcao) =>{
    if(opcao == 1){
        dep.innerHTML = 'As pessoas se olham e não se falam, se esbarram na rua e se maltratam, usam a desculpa de que nem Cristo agradou, falô, você vai querer mesmo se comparar com o Senhor?'
        nome.innerHTML = 'Criolo'
        box.style.background = 'rgb(235, 59, 90)'
        box.style.boxShadow = '0 10px 10px rgba(235, 59, 90, 0.8)'
    }else if(opcao == 2){
        dep.innerHTML = 'Não espere o futuro mudar tua vida, porque o futuro é a consequência do presente.'
        nome.innerHTML = 'Racionais MCs'
        box.style.background = 'rgb(250, 130, 49)' 
        box.style.boxShadow = '0 10px 10px rgba(250, 130, 49, 0.8)'    
    }else if(opcao == 3){
        dep.innerHTML = 'Meu coração não se cansa de ter esperança de um dia ser tudo o que quer!'
        nome.innerHTML = 'Caetano Veloso'
        box.style.background = 'rgb(163, 93, 234)'
        box.style.boxShadow = '0 10px 10px rgba(163, 93, 234, 0.8)' 
    }else if(opcao == 4){
        dep.innerHTML = 'Ela ter ido embora, tudo bem, eu não tô nem aí, perder meu caminhão foi que doeu...'
        nome.innerHTML = 'Matanza'
        box.style.background = 'rgb(32, 191, 107)'
        box.style.boxShadow = '0 10px 10px rgba(32, 191, 107, 0.8)' 
    }else{
        dep.innerHTML = 'Na mudança do presente, a gente molda o futuro.'
        nome.innerHTML = 'Gabriel O Pensador'
        box.style.background = 'rgb(75, 123, 236)'
        box.style.boxShadow = '0 10px 10px rgba(75, 123, 236, 0.8)' 
    }
    
}