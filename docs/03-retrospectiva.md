# Retrospectiva — Exercício 5 (Filmes)

## ✅ O que funcionou bem
- Estrutura src/ + test/ desde o início facilitou a organização.
- Quebrar a lógica em 3 funções pequenas (calcularMedia, classificarFilme,
  analisarFilmes) tornou os testes mais focados e legíveis.
- Aplicação prática de EP e BVA nos testes de classificação.
- Uso do `node --test` sem dependências externas — projeto 100% nativo Node.

## ⚠️ Dificuldades encontradas

### 1. Erro `MODULE_NOT_FOUND` ao rodar `node --test test/`
- **Sintoma:** Node tentou resolver `test/` como módulo.
- **Causa:** Node 20+ já descobre arquivos de teste automaticamente.
- **Solução:** Remover o argumento → `"test": "node --test"`.
- **Aprendizado:** Ler documentação antes de assumir comportamento.

### 2. Erro `Cannot find module '../src/filmes'`
- **Sintoma:** Teste não encontrava o arquivo de produção.
- **Causa:** Arquivo de produção estava nomeado/posicionado errado.
- **Solução:** Corrigi o nome da pasta/arquivo e ajustei o caminho.
- **Aprendizado:** A mensagem de erro do Node mostra o caminho exato
  esperado — basta ler com calma.

## 🎯 Números finais
- 11 testes executados
- 11 passaram
- 0 falharam
- 3 suítes (calcularMedia, classificarFilme, analisarFilmes)

## 🚀 Próximos passos
- Adicionar cobertura de código com `c8`
- Testar entradas inválidas (null, undefined, tipos errados)
- Refatorar com Jest/Vitest para comparar ferramentas