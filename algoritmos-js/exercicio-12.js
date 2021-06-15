const pesoideal = (altura, sexo) =>{
    sexo = sexo.toUpperCase()
    if(sexo == 'M'){
        console.log((72.7 * altura) - 58 + 'kg é o peso ideal')
    }else if( sexo == 'F'){
        console.log((62.1 * altura) - 44.7 + 'kg é o peso ideal')
    }else{
        console.log(`Opção inválida!`)
    }

}


pesoideal(1.70, 'm')
pesoideal(1.50, 'F')
pesoideal(1.50, 'i')
