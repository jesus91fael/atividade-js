const mediapond = (nota1, nota2, nota3) =>{
    let media = ((nota1*2)+(nota2*3)+(nota3*5))/10
    console.log(`A média final é: ${media.toFixed(2)}`)
}

mediapond(2,9,8)