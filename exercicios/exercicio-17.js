const pessoas = [
  { nome: "Henrique", idade: 21, pet: true },
  { nome: "Iris", idade: 17, pet: false },
  { nome: "Pedro", idade: 10, pet: true },
  { nome: "Adriana", idade: 35, pet: false }
];

const menoresComPet = pessoas.filter(pessoa => pessoa.idade < 18 && pessoa.pet); 
console.log(menoresComPet);