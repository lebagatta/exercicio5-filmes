const { describe, it } = require('node:test');
const assert = require('node:assert');
const { calcularMedia, classificarFilme, analisarFilmes } = require('../src/filmes');

describe('calcularMedia', () => {
  it('deve calcular a média corretamente (caso feliz)', () => {
    // Arrange
    const notas = [5, 4, 4, 4, 5];
    const esperado = 4.4;

    // Act
    const resultado = calcularMedia(notas);

    // Assert
    assert.strictEqual(resultado, esperado);
  });

  it('deve retornar 0 quando o array estiver vazio (caso de erro)', () => {
    // Arrange
    const notas = [];
    const esperado = 0;

    // Act
    const resultado = calcularMedia(notas);

    // Assert
    assert.strictEqual(resultado, esperado);
  });

  it('deve retornar a própria nota quando houver apenas 1 avaliação', () => {
    // Arrange
    const notas = [3];
    const esperado = 3;

    // Act
    const resultado = calcularMedia(notas);

    // Assert
    assert.strictEqual(resultado, esperado);
  });
});

describe('classificarFilme', () => {
  it('deve retornar "Filme recomendado" para média >= 4 (EP)', () => {
    assert.strictEqual(classificarFilme(4.5), 'Filme recomendado');
  });

  it('deve retornar "Filme razoável" para média entre 3 e 4 (EP)', () => {
    assert.strictEqual(classificarFilme(3.5), 'Filme razoável');
  });

  it('deve retornar "Filme ruim" para média < 3 (EP)', () => {
    assert.strictEqual(classificarFilme(2.0), 'Filme ruim');
  });

  it('BVA: média exatamente 4 deve ser "Filme recomendado"', () => {
    assert.strictEqual(classificarFilme(4), 'Filme recomendado');
  });

  it('BVA: média exatamente 3 deve ser "Filme razoável"', () => {
    assert.strictEqual(classificarFilme(3), 'Filme razoável');
  });

  it('BVA: média 2.99 deve ser "Filme ruim"', () => {
    assert.strictEqual(classificarFilme(2.99), 'Filme ruim');
  });
});

describe('analisarFilmes', () => {
  it('deve processar a entrada do enunciado corretamente', () => {
    // Arrange
    const filmes = [
      { nome: 'Minha mãe é uma peça', avaliacoes: [5, 4, 4, 4, 5] },
      { nome: 'Saneamento Básico', avaliacoes: [3, 4, 2, 3, 4] },
      { nome: 'Se eu fosse você', avaliacoes: [1, 2, 3] },
    ];

    // Act
    const resultado = analisarFilmes(filmes);

    // Assert
    assert.strictEqual(resultado.length, 3);
    assert.strictEqual(resultado[0].classificacao, 'Filme recomendado');
    assert.strictEqual(resultado[1].classificacao, 'Filme razoável');
    assert.strictEqual(resultado[2].classificacao, 'Filme ruim');
    assert.strictEqual(resultado[0].votantes, 5);
    assert.strictEqual(resultado[2].votantes, 3);
  });

  it('deve retornar array vazio quando a entrada for vazia', () => {
    // Arrange
    const filmes = [];

    // Act
    const resultado = analisarFilmes(filmes);

    // Assert
    assert.deepStrictEqual(resultado, []);
  });
});