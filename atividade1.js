let n1 = Number(prompt('digite o primeiro numero'))
let n2 = Number(prompt('digite o segundo numero'))

let array = [
   soma = (n1) + (n2),
   subtração = (n1) - (n2),
   resto = (n1) % (n2),
   vezes = (n1) * (n2),
   divisao = (n1) / (n2),
]


for(let contas of array) {
  alert(contas)
}

if (soma % 2 == 0) {
  alert(`a soma dos dois numeros que voce escolheu da ${soma}, e isso é um numero par`)
} else {
  alert(`a soma dos dois numeros que voce escolheu da ${soma}, e isso é um numero impar`)
}

if (n1 == n2) {
  alert('os dois valores são iguais')
} else {
  alert('os dois valores são diferentes')
}