const alunos = [
  { nome: "Ana", idade: 19, notas: [8, 7, 10], ativo: true },
  { nome: "Bruno", idade: 17, notas: [5, 6, 4], ativo: true },
  { nome: "Carlos", idade: 22, notas: [9, 8, 9], ativo: false },
  { nome: "Daniela", idade: 25, notas: [10, 9, 10], ativo: true }
];

const alunosFiltrados = alunos.filter(aluno => {

  const estaAtivo = aluno.ativo === true;

  const eMaiorDeIdade = aluno.idade >= 18;

  const somaNotas = aluno.notas.reduce((acc, nota) => acc + nota, 0);
  const media = somaNotas / aluno.notas.length;
  const temMediaBoa = media >= 7;

  // O aluno SÓ passa na peneira se atender aos TRÊS critérios ao mesmo tempo
  return estaAtivo && eMaiorDeIdade && temMediaBoa;
});

console.log("Alunos aprovados nos critérios:");
console.log(alunosFiltrados);