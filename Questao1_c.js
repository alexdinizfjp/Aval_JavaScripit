const alunos = [
  { nome: "Ana", idade: 19, notas: [8, 7, 10], ativo: true },
  { nome: "Bruno", idade: 17, notas: [5, 6, 4], ativo: true },
  { nome: "Carlos", idade: 22, notas: [9, 8, 9], ativo: false },
  { nome: "Daniela", idade: 25, notas: [10, 9, 10], ativo: true }
];

const relatorioAlunos = alunos.map(aluno => {
  
  const somaNotas = aluno.notas.reduce((acc, nota) => acc + nota, 0);
  const mediaCalculada = somaNotas / aluno.notas.length;
  
  let statusSituacao = "REPROVADO";
  if (mediaCalculada >= 7) {
    statusSituacao = "APROVADO";
  }

  return {
    nome: aluno.nome,
    media: Number(mediaCalculada.toFixed(2)),
    situacao: statusSituacao
  };
});

console.log("--- RELATÓRIO DE ALUNOS (MAP) ---");
console.log(relatorioAlunos);