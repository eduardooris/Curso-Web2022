const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach((nome, indice) => {
    return (
        console.log(`${indice + 1}) ${nome}`)
    )
})

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)