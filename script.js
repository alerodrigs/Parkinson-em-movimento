const cartas = document.querySelectorAll('.card');
const btnDireita = document.querySelector('.esquerda');
const btnEsquerda = document.querySelector('.direita');

let posicoes = ['posicao-1', 'posicao-2', 'posicao-3', 'posicao-4', 'posicao-5'];

let animando = false; 

function atualizarBaralho() {
    cartas.forEach((carta, index) => {
       carta.classList.remove('posicao-1', 'posicao-2', 'posicao-3', 'posicao-4', 'posicao-5');
        
        carta.classList.add(posicoes[index]);
    });
}

btnDireita.addEventListener('click', () => {
    if (animando) return; 
    animando = true;

    const cardFrente = document.querySelector('.posicao-1');
    
    cardFrente.classList.add('saindo-da-frente');
    setTimeout(() => {
        const ultimaPosicao = posicoes.pop();
        posicoes.unshift(ultimaPosicao);
        atualizarBaralho();

        setTimeout(() => {

            setTimeout(() => { animando = false; }, 500);
            cardFrente.classList.remove('saindo-da-frente');
        }, 800); 
        
        
    }, 200); 
});

btnEsquerda.addEventListener('click', () => {
    if (animando) return;
    animando = true;

    const cardFundo = document.querySelector('.posicao-5');

    cardFundo.classList.add('entrando-na-frente');

    setTimeout(() => {
        
        cardFundo.classList.remove('entrando-na-frente');

        const primeiraPosicao = posicoes.shift();
        posicoes.push(primeiraPosicao);
        
        atualizarBaralho();
        setTimeout(() => { animando = false; }, 500);
    }, 800);
});