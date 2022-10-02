// Arrow function
const soma = (a, b) => a + b

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(text = "node") {
    console.log(text)
}

log()
log("Sou mais forte!!!")

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}