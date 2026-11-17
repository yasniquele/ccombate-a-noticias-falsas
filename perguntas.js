
export const perguntas = [

    // POSIÇÃO 0: pergunta comum aos dois caminhos.
    {
        enunciado:
            "Você está navegando nas redes sociais e encontra " +
            "uma notícia que parece muito importante, mas não " +
            "sabe se ela é verdadeira. Qual é sua primeira reação?",
        alternativas: [
            {
                texto:
                    "Quero investigar a notícia antes de acreditar nela.",
                afirmacao: [
                    "Decidiu investigar a notícia antes de acreditar nela."
                ],
                proxima: 1
            },
            {
                texto:
                    "Quero compartilhar a notícia com meus amigos.",
                afirmacao: [
                    "Decidiu compartilhar a notícia com seus amigos."
                ],
                proxima: 2
            }
        ]
    },

    // POSIÇÃO 1: começo da narrativa de investigação.
    {
        enunciado:
            "Você decide investigar a notícia. Ao pesquisar, " +
            "percebe que ela não apresenta fontes confiáveis. " +
            "O que você pretende fazer?",
        alternativas: [
            // Vamos construir estas alternativas na próxima parte.
        ]
    },

    // POSIÇÃO 2: começo da narrativa de compartilhamento.
    {
        enunciado:
            "Você pensa em compartilhar a notícia com seus amigos. " +
            "Antes disso, um colega avisa que a informação pode " +
            "ser falsa. O que você pretende fazer?",
        alternativas: [
            // Vamos construir estas alternativas na próxima parte.
        ]
    }

];
