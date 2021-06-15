const duracao = (tempo) => {
    let hora = tempo / 3600
    let minutos = (tempo%3600)/60
    let segundos = (tempo%3600)%60
    console.log(`O evento possui ${hora.toFixed(0)}h${minutos.toFixed(0)}m${segundos.toFixed(0)}`)
}


duracao(7200)