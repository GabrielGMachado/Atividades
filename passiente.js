let pacientes = [
  {
    nome: "ana",
    age: 12,
    tipo: "comível"
  },
  {
    nome: "jemeli",
    age: 17,
    tipo: "careca"
  },
  {
    nome: "iago",
    age: 17,
    tipo: "gay/negro"
  },
];

for (let patient of pacientes) {
  let { nome, age, tipo } = patient;
  alert(`${nome} tem ${age} anos e seu tipo é ${tipo}`);
}