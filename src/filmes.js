function calcularMedia(notas) {
  if (notas.length === 0) return 0;
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return soma / notas.length;
}
function classificarFilme(media) {
  if (media >= 4) return 'Filme recomendado';
  if (media >= 3) return 'Filme razoável';
  return 'Filme ruim';
}
function analisarFilmes(filmes) {
  return filmes.map((filme) => {
    const votantes = filme.avaliacoes.length;
    const media = calcularMedia(filme.avaliacoes);
    const classificacao = classificarFilme(media);

    return {
      nome: filme.nome,
      votantes,
      media,
      classificacao,
    };
  });
}

module.exports = { calcularMedia, classificarFilme, analisarFilmes };