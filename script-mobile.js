document.addEventListener('DOMContentLoaded', function () {

const btnMenu = document.getElementById('btn-menu-mobile');
const navDireita = document.getElementById('nav-direita');

if (btnMenu && navDireita) {
    function alternarMenu() {
        const aberto = navDireita.classList.toggle('aberto');
        btnMenu.classList.toggle('aberto', aberto);
        btnMenu.setAttribute('aria-expanded', aberto ? 'true' : 'false');
        btnMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    }

    btnMenu.addEventListener('click', alternarMenu);

    // fecha o menu ao clicar em algum link (ex: "Condição")
    navDireita.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navDireita.classList.remove('aberto');
            btnMenu.classList.remove('aberto');
            btnMenu.setAttribute('aria-expanded', 'false');
            btnMenu.setAttribute('aria-label', 'Abrir menu');
        });
    });
}

// Dots do carrossel: marcam qual card está visível durante o swipe
const trilho = document.querySelector('.carrossel-baralho');
const dots = document.querySelectorAll('.dots-carrossel span');

if (trilho && dots.length) {
    const cartoes = trilho.querySelectorAll('.card');

    function atualizarDotAtivo() {
        const centroTrilho = trilho.scrollLeft + trilho.clientWidth / 2;
        let indiceMaisProximo = 0;
        let menorDistancia = Infinity;

        cartoes.forEach((cartao, indice) => {
            const centroCartao = cartao.offsetLeft + cartao.offsetWidth / 2;
            const distancia = Math.abs(centroCartao - centroTrilho);
            if (distancia < menorDistancia) {
                menorDistancia = distancia;
                indiceMaisProximo = indice;
            }
        });

        dots.forEach((dot, indice) => {
            dot.classList.toggle('ativo', indice === indiceMaisProximo);
        });
    }

    let aguardando = false;
    trilho.addEventListener('scroll', () => {
        if (aguardando) return;
        aguardando = true;
        requestAnimationFrame(() => {
            atualizarDotAtivo();
            aguardando = false;
        });
    });
}
}); // fim DOMContentLoaded
