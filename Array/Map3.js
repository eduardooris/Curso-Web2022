const carrinho = [
    { "nome": "Borracha", "preco": 3.45 },
    { "nome": "Caderno", "preco": 13.90 },
    { "nome": "Kit de Lapís", "preco": 41.22 },
    { "nome": "Caneta", "preco": 7.50}
]

// Retornar um array apenas com os preços



const resultado = carrinho.map(produto => produto.preco)

console.log(resultado)