
const botaoJogar = document.getElementById("botaoJogar");
const diviniciojogo = document.getElementById("iniciojogo");
const caixaUniQuizDiv = document.getElementById("caixaUniQuiz");
const divtextopergunta = document.getElementById("textoperguntas");
const btnProximo = document.getElementById("botaoProximo");

let indicePerguntas = 0;

let contadorRespostasCorretas = 0

botaoJogar.addEventListener("mouseover", iniciarjogo)




// Arrays
const perguntasQuiz = [
    { pergunta: "Qual é o maior deserto do mundo?", opcoes: ["Saara", "Antartida", "praia de torres"], resposta: "Antartida" },
    { pergunta: "Qual é a capital do Brasil?", opcoes: ["RJ", "SP", "Brasilia"], resposta: "Brasilia" },
    { pergunta: "Qual é a capital da Austrália?", opcoes: ["Palhoça", "Urubici", "Canguru"], resposta: "Canguru" },
    { pergunta: "Qual é o país com maior população no mundo?", opcoes: ["China", "India", "Japão"], resposta: "India" },
    { pergunta: " Qual a linha imaginária que atravessa o Brasil?", opcoes: ["Sonho", "equador", "capricornio"], resposta: "Equador" },
    { pergunta: "Qual o oceano que banha o Brasil?", opcoes: ["Atlântico", "Indico", "Pacifíco"], resposta: "Atlântico" },
];


function iniciarjogo() {
    diviniciojogo.innerHTML = ""
    carregarQuestao(perguntasQuiz[indicePerguntas]);

}

function carregarQuestao(questao) {

    // tornando a DIV das questões visível
    caixaUniQuizDiv.classList.add("active");

    btnProximo.disabled = true
    divtextopergunta.textContent = questao.pergunta
    opcoesRespostas.innerHTML = ""
    questao.opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.classList.add("answer-btn");
        botao.addEventListener("click", () => validarresposta(opcao));
        opcoesRespostas.appendChild(botao);
    });
}
function validarresposta(respostaSelecionada) {
    //mostrar a resposta correta em cor destacada
    const botoesopcoes = document.querySelectorAll(".answer-btn")
    const gabarito = perguntasQuiz[indicePerguntas].resposta
    botoesopcoes.forEach(botao2 => {
        if (botao2.textContent === gabarito) {
            botao2.classList.add("correct")
            //verde = correta
        }
        if (botao2.textContent === respostaSelecionada && respostaSelecionada != gabarito) {
            botao2.classList.add("incorrect")
            //vermelhor = incorreta
        }

        botao2.disabled = true
        

    })
    if (respostaSelecionada == gabarito) {
        contadorRespostasCorretas++
    }
    btnProximo.disabled = false
}
function carregarProximaQuestao() {
    indicePerguntas++;
    if (indicePerguntas < perguntasQuiz.length)
        carregarQuestao(perguntasQuiz[indicePerguntas]);
    else
        alert("não existe mais perguntas...\n voce acertou " + contadorRespostasCorretas)
}
