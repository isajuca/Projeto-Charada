// 1. Capturando os elementos do HTML
const cardInner = document.getElementById("card-inner");
const campoPergunta = document.getElementById("pergunta");
const campoResposta = document.getElementById("resposta");
const btnNova = document.getElementById("btn-nova");
const btnReset = document.getElementById("btn-reset");
const btnAcerto = document.getElementById("btn-acerto");
const btnErro = document.getElementById("btn-erro");
const pontosAcerto = document.getElementById("pontos-acerto");
const pontosErro = document.getElementById("pontos-erro");

// 2. Variáveis de controle (Estado do App)
let acertos = 0;
let erros = 0;
const CLASSE_GIRO = '[transform:rotateY(180deg)]';

// 3. Função principal: Buscar Charada na API
async function buscaCharada() {
    try {
        // Prepara o visual para o carregamento
        btnNova.disabled = true;
        btnNova.innerText = "Carregando...";
        
        // Se o card estiver virado, desvira antes de mostrar a nova pergunta
        cardInner.classList.remove(CLASSE_GIRO);

        const response = await fetch('https://api-charadas-five.vercel.app/charadas/aleatorias');
        const dados = await response.json();

        // Insere os dados nos parágrafos do HTML
        campoPergunta.textContent = dados.pergunta;
        campoResposta.textContent = dados.resposta;

    } catch (erro) {
        campoPergunta.textContent = "Ops! Erro ao carregar charada. 😢";
        console.error("Erro na busca:", erro);
    } finally {
        // Reativa o botão
        btnNova.disabled = false;
        btnNova.innerHTML = "Nova Charada 🎲";
    }
}

// 4. Eventos (O que acontece quando clicamos)

// Giro do Card
cardInner.addEventListener('click', () => {
    cardInner.classList.toggle(CLASSE_GIRO);
});

// Botão de Nova Charada
btnNova.addEventListener('click', buscaCharada);

// Botão de Acerto
btnAcerto.addEventListener('click', () => {
    acertos++;
    pontosAcerto.textContent = acertos;
    buscaCharada(); // Já busca a próxima automaticamente
});

// Botão de Erro
btnErro.addEventListener('click', () => {
    erros++;
    pontosErro.textContent = erros;
    buscaCharada(); // Já busca a próxima automaticamente
});

// Botão Resetar Placar
btnReset.addEventListener('click', () => {
    acertos = 0;
    erros = 0;
    pontosAcerto.textContent = "0";
    pontosErro.textContent = "0";
    buscaCharada();
});

// 5. Inicialização: Carregar a primeira charada ao abrir o site
buscaCharada();