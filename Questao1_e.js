// FORMATO 1: DECLARAÇÃO TRADICIONAL
function calcularMediaTradicional(nomeAluno, listaAlunos) {
  const aluno = listaAlunos.find(a => a.nome.toLowerCase() === nomeAluno.toLowerCase());
  
  if (!aluno) return `Aluno(a) "${nomeAluno}" não encontrado(a).`;

  const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
  const media = soma / aluno.notas.length;

  return `A média de ${aluno.nome} é: ${media.toFixed(2)}`;
}


// FORMATO 2: EXPRESSÃO DE FUNÇÃO
const calcularMediaExpressao = function(nomeAluno, listaAlunos) {
  const aluno = listaAlunos.find(a => a.nome.toLowerCase() === nomeAluno.toLowerCase());
  
  if (!aluno) return `Aluno(a) "${nomeAluno}" não encontrado(a).`;

  const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
  const media = soma / aluno.notas.length;

  return `A média de ${aluno.nome} é: ${media.toFixed(2)}`;
};


// FORMATO 3: ARROW FUNCTION
const calcularMediaArrow = (nomeAluno, listaAlunos) => {
  const aluno = listaAlunos.find(a => a.nome.toLowerCase() === nomeAluno.toLowerCase());
  
  if (!aluno) return `Aluno(a) "${nomeAluno}" não encontrado(a).`;

  const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
  const media = soma / aluno.notas.length;

  return `A média de ${aluno.nome} é: ${media.toFixed(2)}`;
};

console.log("--- TESTANDO OS 3 FORMATOS ---");
console.log(calcularMediaTradicional("Ana", alunos)); // Formato 1
console.log(calcularMediaExpressao("Ana", alunos));  // Formato 2
console.log(calcularMediaArrow("Ana", alunos));      // Formato 3