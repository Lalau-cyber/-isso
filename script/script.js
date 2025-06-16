
const botaoJogar = document.getElementById("botaoJogar");
const diviniciojogo = document.getElementById("iniciojogo");

//const nomeNivelAtualSpan = document.getElementById("nomeNivelAtual");

const caixaUniQuizDiv = document.getElementById("caixaUniQuiz");

let indicePerguntas = 0;

const botao = document.createElement("button");

// Arrays
const perguntasQuiz = [ 
     "Qual é o maior deserto do mundo?",
     "Qual é a capital do Brasil?",
     "Qual é a capital da Austrália?",
     "Qual é o país com maior população no mundo?",
     " Qual a linha imaginária que atravessa o Brasil?",
     "Qual o oceano que banha o Brasil?",
];


function iniciarjogo() {
    //diviniciojogo.remove();
    diviniciojogo.innerHTML = ""
    carregarQuestao(perguntasQuiz[indicePerguntas]);
    
}

function carregarQuestao(pergunta) {

    // tornando a DIV das questões visível
    caixaUniQuizDiv.classList.add("active");

    //perguntasQuiz.forEach(opcao => {
       
        botao.textContent = pergunta;
        botao.classList.add("answer-btn");
        botao.addEventListener("click", () => opcao);
        opcoesRespostas.appendChild(botao);
    //});
}

function carregarProximaQuestao(){
    indicePerguntas++;
    if(indicePerguntas < perguntasQuiz.length){
        carregarQuestao(perguntasQuiz[indicePerguntas]);
    }
}


