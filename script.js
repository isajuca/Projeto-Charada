// Capturando os elementos HTML
const cardInner = document.getElementById("card-inner")
const campoPergunta = document.getElementById("pergunta")
const campoResposta = document.getElementById("resposta")
const btnNova = document.getElementById("btn-nova")
const btnReset = document.getElementById("btn-reset")
const btnAcerto = document.getElementById("btn-acerto")
const btnErro = document.getElementById("btn-erro")
const pontosAcerto = document.getElementById("pontos-acerto")
const pontosErro = document.getElementById("pontos-erro")

let acertos = 0
let erros = 0

// Evento que faz o card girar
cardInner.addEventListener('click', () => {
    cardInner.classList.toggle('[transform:rotateY(180deg)]')
})

// Ação do botão nova charada
btnNova.addEventListener('click', () => {
    buscaCharada()
})

btnAcerto.addEventListener('click', () => {
    acertos += 1
    pontosAcerto.textContent = acertos
})

btnErro.addEventListener('click', () => {
    erros += 1
    pontosErro.textContent = erros
})

btnReset.addEventListener('click', () => {
    acertos = 0
    erros = 0
    pontosAcerto.textContent = acertos
    pontosErro.textContent = erros
    cardInner.classList.remove('[transform:rotateY(180deg)]')
    buscaCharada()
})

// Função que irá buscar as charadas no backend
async function buscaCharada() {
    try {
        const baseUrl = 'https://api-charadas-five.vercel.app'
        const endPoint = '/charadas/aleatorias'
        // Impressão no console log para verificação da rota concatenada
        // console.log(baseUrl+endPoint)
        // Busca assíncrona da rota concatenada
        const respostaApi = await fetch(baseUrl+endPoint) 
        // console.log(respostaApi)
        const dados = await respostaApi.json()
        // console.log(dados) 
        // console.log(dados.pergunta)
        // console.log(dados.resposta)
        campoPergunta.textContent = dados.pergunta
        campoResposta.textContent = dados.resposta

    } catch (erro) {
        campoPergunta.textContent = "Erro ao conectar com o servidor backend."
        console.error("Erro na busca:", erro)
    }
}
