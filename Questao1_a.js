const alunos = [
  { nome: "Ana", idade: 19, notas: [8, 7, 10], ativo: true },
  { nome: "Bruno", idade: 17, notas: [5, 6, 4], ativo: true },
  { nome: "Carlos", idade: 22, notas: [9, 8, 9], ativo: false },
  { nome: "Daniela", idade: 25, notas: [10, 9, 10], ativo: true }
];

/**
 * Função que recebe o nome de um aluno e retorna a sua média formatada
 * @param {string} nomeAluno - O nome do aluno que queremos buscar
 * @param {Array} listaAlunos - O array completo de alunos
 */
function calcularMediaDoAluno(nomeAluno, listaAlunos) {
  const alunoEncontrado = listaAlunos.find(aluno => aluno.nome.toLowerCase() === nomeAluno.toLowerCase());

  if (!alunoEncontrado) {
    return `Aluno(a) "${nomeAluno}" não encontrado(a) no sistema.`;
  }

  const somaNotas = alunoEncontrado.notas.reduce((acumulador, notaAtual) => {
    return acumulador + notaAtual;
  }, 0);

  const media = somaNotas / alunoEncontrado.notas.length;

  return `A média de ${alunoEncontrado.nome} é: ${media.toFixed(2)}`;
}

console.log(calcularMediaDoAluno("Ana", alunos)); 
console.log(calcularMediaDoAluno("Carlos", alunos));
console.log(calcularMediaDoAluno("Alex", alunos));