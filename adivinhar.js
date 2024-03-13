const match = Math.round(Math.random() * 10);

let adivinhar;
let i = 1

adivinhar = prompt("tente acertar um numero entre 0 e 10");

while (match != adivinhar) {
  adivinhar = prompt("Tente novamente: ");

  i++
}

alert(`Parabéns, você acertou em ${i} tentativas!`);



