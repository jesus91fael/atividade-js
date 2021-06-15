const idadeemdias = (dias) =>{
    let ano = dias / 365
    let meses = (dias%365)/30
    let dia = (dias%365)%30

    console.log(`Sua idade é ${ano.toFixed(0)} anos, ${meses.toFixed(0)} meses e ${dia.toFixed(0)} dias`)
}


idadeemdias(11085)