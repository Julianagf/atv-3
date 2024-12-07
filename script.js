const perguntas = [
    {
        enunciado: "Qual das alternativas a seguir retrada um tipo de miologia não existente?",
        alternativas: [
            { texto: "mitologia zulu", correta: true },
            { texto: "mitologia solar", correta: false }
        ]
    },
    {
        enunciado: "Qual dos seres a serguir é considerado um ser mitológico?<BR>",
        alternativas: [
            { texto: "sister", correta: false },
            { texto: "forseti", correta: true }
        ]
    },
    {
        enunciado: "Dentre as afirmativas assinale apenas as que se encontram no folclore brasileiro: <BR>",
        alternativas: [
            { texto: "mula sem cabeça, saci e lobisomen", correta: true },
            { texto: "iara, bumba meu boi e saore", correta: false }
        ]
    },
    {
        enunciado: "qual a festa que faz parte das manifestações culturais? <BR>",
        alternativas: [
            { texto: "festa junina", correta: false },
            { texto: "carnaval", correta: true }
        ]
    }
    // Adicione mais perguntas conforme necessário
];

let perguntaAtual = 0;

function mostrarPergunta(pergunta) {
    const container = document.getElementById('questao-container');
    container.innerHTML = '';

    const enunciado = document.createElement('div');
    enunciado.className = 'enunciado';
    enunciado.innerHTML = pergunta.enunciado; // Usa innerHTML para interpretar <br> e outras tags HTML
    container.appendChild(enunciado);

    pergunta.alternativas.forEach((alt) => {
        const alternativa = document.createElement('div');
        alternativa.className = 'alternativa';
        alternativa.textContent = alt.texto;
        alternativa.dataset.correta = alt.correta; // Adiciona uma propriedade de dados para armazenar se a alternativa é correta
        alternativa.onclick = () => verificarResposta(alternativa);
        container.appendChild(alternativa);
    });
}
function verificarResposta(alternativaSelecionada) {
    const alternativas = document.querySelectorAll('.alternativa');
    const correta = alternativaSelecionada.dataset.correta === 'true'; // Verifica se a alternativa é correta

    alternativas.forEach(alt => {
        alt.onclick = null; // Desabilita cliques adicionais
        if (alt === alternativaSelecionada) {
            if (correta) {
                alt.classList.add('certa');
                alt.textContent += ' - Correto'; // Adiciona "Correto" ao final
            } else {
                alt.classList.add('errada');
                alt.textContent += ' - errado'; // Adiciona "Errado" ao final
            }
        } else {
            if (alt.dataset.correta === 'true') {
                alt.classList.add('certa'); // Marca alternativas corretas como "certa" se ainda não foi selecionada
            }
        }
    });

    setTimeout(() => {
        perguntaAtual++;
        if (perguntaAtual < perguntas.length) {
            mostrarPergunta(perguntas[perguntaAtual]);
        } else {
            const container = document.getElementById('questao-container');
            container.innerHTML = '<h2>Você completou o quiz!</h2>';
        }
    }, 3000); // Tempo para mostrar a resposta antes de avançar
}
// Mostrar a primeira pergunta ao carregar a página
mostrarPergunta(perguntas[perguntaAtual]);