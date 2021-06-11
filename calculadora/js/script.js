const insertnumber = (num) =>{
    
    let numero = document.querySelector('.c-digitados').innerHTML
    document.querySelector('.c-digitados').innerHTML = numero + num
}

const clean = () =>{
    document.querySelector('.c-digitados').innerHTML = ''
    document.querySelector('.c-res').innerHTML = ''
}

const back = () =>{
    let resultado = document.querySelector('.c-digitados').innerHTML
    document.querySelector('.c-digitados').innerHTML = resultado.substring(0, resultado.length - 1)
}

const calcular = () =>{
    let resultado = document.querySelector('.c-digitados').innerHTML
    if(resultado){
        document.querySelector('.c-res').innerHTML = eval(resultado)
    }else{
        document.querySelector('.c-res').innerHTML = ''
    }
}