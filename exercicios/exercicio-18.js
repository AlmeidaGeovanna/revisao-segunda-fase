const usuarios = [
  { nome: "Iris", sobrenome: "Silva"},
  { nome: "Henrique", sobrenome: "Celso"},
  { nome: "Pedro", sobrenome: "Hauer"},
  { nome: "Adriana", sobrenome: "Pereira"},
];

const nomesCompletos = usuarios.map(usuario => `${usuario.nome} ${usuario.sobrenome}`);

console.log(nomesCompletos);

