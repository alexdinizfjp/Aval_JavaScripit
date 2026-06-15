const descontoGlobal = 10;

const calcularPreco = produto => {

  const desconto = produto.promocao ? 20 : descontoGlobal;
  return produto.preco - (produto.preco * desconto / 100);
};

const produtos = [
  { nome: "Notebook", preco: 4000, promocao: true },
  { nome: "Mouse", preco: 100, promocao: false },
  { nome: "Monitor", preco: 1200, promocao: true }
];

const resultado = produtos.map(calcularPreco);

console.log(`Resultados dos preços calculados: [${resultado.join(', ')}]`);