let studant = prompt('qual o nome do estudante?')
let n1 = prompt('qual a primeira nota dele?')
let n2 = prompt('qual a segunda nota dele?')
let n3 = prompt('qual a terceira nota dele?')

let media = (Number(n1) + Number(n2) + Number(n3)) / 3


media = media.toFixed(2)

if (media > 6) {
  alert(`a media do aluno foi ${media} ele esta aprovado`)
} else {
  alert(`a media do aluno foi ${media} ele esta reprovado`)
}
