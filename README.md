# 🎬 Exercício 5 — Análise de Avaliações de Filmes

> Projeto desenvolvido durante a mentoria **M2.0** como parte da minha transição de carreira para **Quality Assurance**.

![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)
![Tests](https://img.shields.io/badge/tests-11%20passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-success)

---

## 📌 Sobre o projeto

Dado um array de filmes, cada um com suas respectivas avaliações (notas de 1 a 5), o sistema deve:

1. Informar **quantas pessoas votaram** em cada filme
2. Calcular a **média das notas**
3. Classificar o filme conforme a média obtida

### 🎯 Regras de negócio

| Média                | Classificação       |
|----------------------|---------------------|
| Média ≥ 4            | 🟢 Filme recomendado |
| 3 ≤ Média < 4        | 🟡 Filme razoável    |
| Média < 3            | 🔴 Filme ruim        |

### 📥 Entrada de exemplo

```javascript
[
  { nome: "Minha mãe é uma peça", avaliacoes: [5, 4, 4, 4, 5] },
  { nome: "Saneamento Básico",    avaliacoes: [3, 4, 2, 3, 4] },
  { nome: "Se eu fosse você",     avaliacoes: [1, 2, 3] }
]
```

### 📤 Saída esperada

```javascript
[
  { nome: "Minha mãe é uma peça", votantes: 5, media: 4.4, classificacao: "Filme recomendado" },
  { nome: "Saneamento Básico",    votantes: 5, media: 3.2, classificacao: "Filme razoável" },
  { nome: "Se eu fosse você",     votantes: 3, media: 2,   classificacao: "Filme ruim" }
]
```

---

## 🛠️ Stack utilizada

- **Node.js** v20+ (test runner nativo)
- **`node:test`** — suíte de testes integrada ao Node
- **`node:assert`** — biblioteca de asserções nativa
- **VS Code** como IDE
- **Git + GitHub** para versionamento

> 💡 **Zero dependências externas.** O projeto utiliza apenas recursos nativos do Node.js — sem Jest, Mocha ou Chai.

---

## 📁 Estrutura do projeto

```
exercicio5-filmes/
├── src/
│   └── filmes.js                # Código de produção
├── test/
│   └── filmes.test.js           # Suíte de testes (11 casos)
├── docs/
│   ├── 01-requisitos.md         # Análise do enunciado + ambiguidades
│   ├── 02-plano-de-testes.md    # Cenários, EP, BVA e rastreabilidade
│   ├── 03-retrospectiva.md      # Aprendizados e dificuldades
│   └── evidencias/
│       └── npm-test-passando.png
├── .gitignore
├── package.json
└── README.md
```

---

## ▶️ Como executar

### Pré-requisitos

- Node.js **v20 ou superior** instalado ([download](https://nodejs.org/))

### Passo a passo

```bash
# 1. Clonar o repositório
git clone https://github.com/SEU_USUARIO/exercicio5-filmes.git
cd exercicio5-filmes

# 2. Rodar os testes
npm test
```

### Saída esperada

```
▶ calcularMedia
  ✔ deve calcular a média corretamente (caso feliz)
  ✔ deve retornar 0 quando o array estiver vazio (caso de erro)
  ✔ deve retornar a própria nota quando houver apenas 1 avaliação
✔ calcularMedia

▶ classificarFilme
  ✔ deve retornar "Filme recomendado" para média >= 4 (EP)
  ✔ deve retornar "Filme razoável" para média entre 3 e 4 (EP)
  ✔ deve retornar "Filme ruim" para média < 3 (EP)
  ✔ BVA: média exatamente 4 deve ser "Filme recomendado"
  ✔ BVA: média exatamente 3 deve ser "Filme razoável"
  ✔ BVA: média 2.99 deve ser "Filme ruim"
✔ classificarFilme

▶ analisarFilmes
  ✔ deve processar a entrada do enunciado corretamente
  ✔ deve retornar array vazio quando a entrada for vazia
✔ analisarFilmes

ℹ tests 11
ℹ suites 3
ℹ pass 11
ℹ fail 0
```

---

## 🧪 Técnicas de teste aplicadas (ISTQB)

Este projeto aplica, na prática, técnicas formais do **ISTQB CTFL**:

### ✅ Padrão AAA (Arrange, Act, Assert)

Todos os testes seguem a estrutura:

```javascript
it('deve calcular a média corretamente', () => {
  // Arrange
  const notas = [5, 4, 4, 4, 5];
  const esperado = 4.4;

  // Act
  const resultado = calcularMedia(notas);

  // Assert
  assert.strictEqual(resultado, esperado);
});
```

### ✅ Particionamento de Equivalência (EP)

| Partição       | Faixa              | Representante | Resultado esperado    |
|----------------|--------------------|---------------|-----------------------|
| Média alta     | média ≥ 4          | 4.5           | "Filme recomendado"   |
| Média mediana  | 3 ≤ média < 4      | 3.5           | "Filme razoável"      |
| Média baixa    | média < 3          | 2.0           | "Filme ruim"          |

### ✅ Análise de Valor Limite (BVA)

| Valor testado | Por quê                          | Resultado esperado  |
|---------------|----------------------------------|---------------------|
| 2.99          | Último valor antes do limite 3   | "Filme ruim"        |
| 3.00          | Limite exato inferior            | "Filme razoável"    |
| 3.99          | Último valor antes do limite 4   | "Filme razoável"    |
| 4.00          | Limite exato superior            | "Filme recomendado" |

---

## 🧠 Decisões de QA documentadas

Durante a **análise do enunciado** — antes de escrever qualquer linha de código — identifiquei **4 ambiguidades** que documentei em [`docs/01-requisitos.md`](docs/01-requisitos.md):

1. **"Quantas pessoas votaram"** — é por filme ou total geral?  
   → Decisão: **por filme** (mais útil e alinhado ao contexto).

2. **Média exatamente 3** — é "razoável" ou "ruim"?  
   → Decisão: **razoável** (`3 ≤ média < 4`). Coberto por teste de BVA.

3. **Média exatamente 4** — é "recomendado" ou "razoável"?  
   → Decisão: **recomendado** (`média ≥ 4`). Coberto por teste de BVA.

4. **Array de avaliações vazio** — o que retornar?  
   → Decisão: **média 0** e classificação "Filme ruim". Coberto por teste.

> 🎯 Essa etapa é o que diferencia quem **só programa** de quem **pensa como QA**.

---

## 📚 Documentação complementar

| Documento | Descrição |
|-----------|-----------|
| [`docs/01-requisitos.md`](docs/01-requisitos.md) | Análise do enunciado, requisitos funcionais e ambiguidades |
| [`docs/02-plano-de-testes.md`](docs/02-plano-de-testes.md) | Cenários, matriz de rastreabilidade, EP e BVA |
| [`docs/03-retrospectiva.md`](docs/03-retrospectiva.md) | O que funcionou, dificuldades e próximos passos |

---

## 🚀 Próximos passos

- [ ] Adicionar cobertura de código com [`c8`](https://github.com/bcoe/c8)
- [ ] Testar entradas inválidas (`null`, `undefined`, tipos incorretos)
- [ ] Refatorar com Jest/Vitest para comparar ferramentas
- [ ] Adicionar CI com GitHub Actions rodando `npm test` a cada push
- [ ] Implementar mutation testing com Stryker

---

## 👤 Autor

**Seu Nome Completo**

- 💼 LinkedIn: [https://www.linkedin.com/in/leandro-bagatta-6787242a3/]
- 🐙 GitHub: [https://github.com/lebagatta]
- 🎓 Mentoria: M2.0 — Júlio de Lima

**Sobre mim:** Profissional em transição de carreira (Medicina Veterinária → TI), focado em **Quality Assurance**, automação de testes com **Node.js** e fundamentos do **ISTQB**.
