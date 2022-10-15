Array.prototype.filter2 = (callback) => {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) ? newArray.push(this[i]) : ''
    }
    return newArray
}
 
const produto2 = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'IPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]