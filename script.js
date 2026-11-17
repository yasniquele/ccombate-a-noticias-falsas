const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoReiniciar = document.querySelector(".botao-reiniciar");

const perguntas = [
    {
        enunciado: "1. O que são fake news?",
        alternativas: [
            {
                texto: "A) Notícias publicadas apenas em jornais.",
                pontos: 0,
                afirmacao: "Resposta errada: fake news não são apenas notícias em jornais."
            },
            {
                texto: "B) Informações falsas divulgadas como se fossem verdadeiras.",
                pontos: 1,
                afirmacao: "Correto: fake news são informações falsas apresentadas como verdadeiras."
            },
            {
                texto: "C) Notícias sobre acontecimentos antigos.",
                pontos: 0,
                afirmacao: "Resposta errada: notícias antigas não são necessariamente fake news."
            }
        ]
    },
    {
        enunciado: "2. Qual é a melhor atitude ao receber uma notícia duvidosa?",
        alternativas: [
            {
                texto: "A) Compartilhar imediatamente.",
                pontos: 0,
                afirmacao: "Resposta errada: compartilhar sem verificar pode espalhar desinformação."
            },
            {
                texto: "B) Acreditar sem questionar.",
                pontos: 0,
                afirmacao: "Resposta errada: é importante questionar e verificar."
            },
            {
                texto: "C) Verificar a informação em fontes confiáveis.",
                pontos: 1,
                afirmacao: "Correto: verificar em fontes confiáveis ajuda a evitar a desinformação."
            }
        ]
    },
    {
        gameOverOnWrong: true,
        enunciado: "3. Qual é uma consequência da divulgação de notícias falsas?",
        alternativas: [
            {
                texto: "A) Desinformação da população.",
                pontos: 1,
                afirmacao: "Correto: fake news podem desinformar a população."
            },
            {
                texto: "B) Aumento do conhecimento científico.",
                pontos: 0,
                afirmacao: "Resposta errada: notícias falsas não aumentam conhecimento científico."
            },
            {
                texto: "C) Melhoria da comunicação.",
                pontos: 0,
                afirmacao: "Resposta errada: a divulgação de notícias falsas prejudica a comunicação."
            }
        ]
    },
    {
        enunciado: "4. Como podemos identificar uma possível fake news?",
        alternativas: [
            {
                texto: "A) Observando apenas a quantidade de curtidas.",
                pontos: 0,
                afirmacao: "Resposta errada: curtidas não confirmam a veracidade da notícia."
            },
            {
                texto: "B) Conferindo a fonte, a data e outras fontes de informação.",
                pontos: 1,
                afirmacao: "Correto: conferir a fonte, a data e outras fontes ajuda a identificar informações falsas."
            },
            {
                texto: "C) Acreditando em qualquer mensagem recebida.",
                pontos: 0,
                afirmacao: "Resposta errada: mensagens recebidas também precisam ser verificadas."
            }
        ]
    },
    {
        enunciado: "5. Qual é o papel das redes sociais no combate às fake news?",
        alternativas: [
            {
                texto: "A) Incentivar o compartilhamento de qualquer conteúdo.",
                pontos: 0,
                afirmacao: "Resposta errada: compartilhar qualquer conteúdo sem verificar espalha notícias falsas."
            },
            {
                texto: "B) Impedir todas as opiniões diferentes.",
                pontos: 0,
                afirmacao: "Resposta errada: combater fake news não significa impedir opiniões diferentes."
            },
            {
                texto: "C) Ajudar na divulgação de informações verdadeiras e denunciar conteúdos falsos.",
                pontos: 1,
                afirmacao: "Correto: redes sociais podem divulgar informações verdadeiras e denunciar conteúdos falsos."
            }
        ]
    },
    {
        gameOverOnWrong: true,
        enunciado: "6. O que significa checar os fatos (fact-checking)?",
        alternativas: [
            {
                texto: "A) Verificar se uma informação é verdadeira.",
                pontos: 1,
                afirmacao: "Correto: checar os fatos é verificar se uma informação é verdadeira."
            },
            {
                texto: "B) Criar notícias para ganhar seguidores.",
                pontos: 0,
                afirmacao: "Resposta errada: checar os fatos não significa criar notícias para ganhar seguidores."
            },
            {
                texto: "C) Compartilhar notícias populares.",
                pontos: 0,
                afirmacao: "Resposta errada: popularidade não substitui verificação."
            }
        ]
    },
    {
        enunciado: "7. Por que as fake news podem ser perigosas?",
        alternativas: [
            {
                texto: "A) Porque ajudam as pessoas a estudar.",
                pontos: 0,
                afirmacao: "Resposta errada: informações falsas atrapalham o aprendizado e a tomada de decisões."
            },
            {
                texto: "B) Porque podem causar medo, confusão e prejudicar pessoas.",
                pontos: 1,
                afirmacao: "Correto: fake news podem causar medo, confusão e danos às pessoas."
            },
            {
                texto: "C) Porque melhoram a qualidade das notícias.",
                pontos: 0,
                afirmacao: "Resposta errada: notícias falsas prejudicam a qualidade da informação."
            }
        ]
    },
    {
        gameOverOnWrong: true,
        enunciado: "8. O que fazer ao perceber que compartilhou uma notícia falsa?",
        alternativas: [
            {
                texto: "A) Continuar compartilhando.",
                pontos: 0,
                afirmacao: "Resposta errada: continuar compartilhando amplia a circulação da informação falsa."
            },
            {
                texto: "B) Fingir que nada aconteceu.",
                pontos: 0,
                afirmacao: "Resposta errada: corrigir o erro ajuda a impedir mais desinformação."
            },
            {
                texto: "C) Apagar ou corrigir a publicação e avisar quem recebeu.",
                pontos: 1,
                afirmacao: "Correto: apagar ou corrigir a publicação e avisar as pessoas ajuda a conter a desinformação."
            }
        ]
    },
    {
        enunciado: "9. Qual é uma fonte mais confiável para confirmar uma notícia?",
        alternativas: [
            {
                texto: "A) Sites oficiais e veículos jornalísticos reconhecidos.",
                pontos: 1,
                afirmacao: "Correto: sites oficiais e veículos jornalísticos reconhecidos são boas fontes para checagem."
            },
            {
                texto: "B) Mensagens anônimas de grupos.",
                pontos: 0,
                afirmacao: "Resposta errada: mensagens anônimas de grupos não são fontes confiáveis por si só."
            },
            {
                texto: "C) Publicações sem autor ou referência.",
                pontos: 0,
                afirmacao: "Resposta errada: publicações sem autoria ou referência devem ser verificadas com cautela."
            }
        ]
    },
    {
        enunciado: "10. Qual atitude contribui para combater a desinformação?",
        alternativas: [
            {
                texto: "A) Compartilhar conteúdos apenas porque concordamos com eles.",
                pontos: 0,
                afirmacao: "Resposta errada: concordar com uma informação não é suficiente para confirmá-la."
            },
            {
                texto: "B) Pensar criticamente e verificar informações antes de compartilhar.",
                pontos: 1,
                afirmacao: "Correto: pensar criticamente e verificar antes de compartilhar combate a desinformação."
            },
            {
                texto: "C) Acreditar em títulos chamativos.",
                pontos: 0,
                afirmacao: "Resposta errada: títulos chamativos podem ser enganosos e não devem ser aceitos sem verificação."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaPerguntas.classList.remove("game-over");
    caixaPerguntas.classList.remove("fim");
    document.querySelector("h1").style.display = "block";
    textoResultado.style.color = "";
    botaoReiniciar.style.display = "none";
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;

    if (perguntaAtual.gameOverOnWrong && opcaoSelecionada.pontos === 0) {
        mostraGameOver();
        return;
    }

    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraGameOver() {
    caixaPerguntas.textContent = "Game Over";
    caixaPerguntas.classList.add("game-over");
    document.querySelector("h1").style.display = "none";
    textoResultado.textContent = "Resposta errada";
    textoResultado.style.color = "red";
    caixaAlternativas.textContent = "";
    botaoReiniciar.style.display = "block";
}

function mostraResultado(){
    caixaPerguntas.textContent = "FIM";
    caixaPerguntas.classList.add("fim");
    caixaPerguntas.classList.remove("game-over");
    textoResultado.textContent = "Você acertou 10/9";
    caixaAlternativas.textContent = "";
    botaoReiniciar.style.display = "block";
}

function reiniciarJogo() {
    atual = 0;
    historiaFinal = "";
    caixaPerguntas.classList.remove("game-over");
    caixaPerguntas.classList.remove("fim");
    document.querySelector("h1").style.display = "block";
    textoResultado.textContent = "";
    textoResultado.style.color = "";
    botaoReiniciar.style.display = "none";
    mostraPergunta();
}

botaoReiniciar.addEventListener("click", reiniciarJogo);

mostraPergunta();