# DestravaMente
Autora: Isa Jucá

DestravaMente é um jogo de charadas em formato de card interativo. O usuário vê uma pergunta, clica para revelar a resposta e pode usar botões para marcar acertos, erros e resetar o placar.

## Funcionalidades

- Exibe uma charada aleatória usando o backend `https://api-charadas-five.vercel.app/charadas/aleatorias`
- O card vira quando clicado para mostrar a resposta
- Botão `Nova Charada` busca outra pergunta
- Botões `Acertei` e `Errei` atualizam um placar simples
- Botão `Resetar Placar` zera o placar e busca uma nova charada

## Tecnologias usadas

- HTML
- CSS com Tailwind via CDN
- JavaScript puro

## Como usar

1. Abra o arquivo `index.html` no seu navegador.
2. Clique no card para ver a resposta.
3. Use `Nova Charada` para trocar a pergunta.
4. Use `Acertei` ou `Errei` para atualizar o placar.
5. Use `Resetar Placar` para zerar os pontos e carregar outra charada.

## Estrutura do projeto

- `index.html` — layout da página e componentes visuais
- `script.js` — lógica de busca de charada, virada do card e placar
- `logo.png` — ícone/logo do projeto

## Links

### 🎮 Quer jogar?
- **Projeto completo**: https://projeto-charada.vercel.app

### 🔌 Quer conhecer a API?
- **API de Charadas**: https://api-charadas-five.vercel.app

## Observações

- O projeto depende da API externa para carregar as charadas.
- Se a API não estiver disponível, a mensagem de erro é exibida no campo da pergunta.
