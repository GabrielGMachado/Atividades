// let option
// let itens = [];
// let i = 0

// while (option !== 3) {

//   option = Number(prompt('digite 1, 2 ou 3'))

//   if (option == 1) {
//     itens[i] = prompt('digite o item')
//     i++
//   }
//   else if (option == 2) {

//     if (itens.length == 0) {
//       alert('nao existe nenhum item')
//     } else {
//       alert(itens)
//     }
//   } else {
//     alert('tchau')
//   }

// }

let option
let itens = [];
let i = 0

while (option !== 3) {

  option = Number(prompt('digite 1, 2 ou 3'))

  switch (option) {
    case 1:
      itens[i] = prompt('digite o item')
    i++
    break;
    case 2:
      if (itens.length == 0) {
        alert('nao existe nenhum item')
      } else {
        alert(itens)
      }
      break;
    case 3:
      alert('tchau')
      break;
  }
}