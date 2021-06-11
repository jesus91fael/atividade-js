let a, b

const resultado = (a, b) =>{
    if(a%2==0 && b%2==0){
        console.log('A é par')
        console.log('B é par')
    }else if(a%2==0 && b%2 !=0){
        console.log('A é par')
        console.log('B é ímpar')
    }else if(a%2 != 0 && b%2 == 0){
        console.log('A é ímpar')
        console.log('B é par')
    }else{
        console.log('A é ímpar')
        console.log('B é ímpar')
    }
}

a = 1
b = 9
resultado(a,b)



