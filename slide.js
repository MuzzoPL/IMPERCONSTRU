var cont = 1;
var intervalId;

document.getElementById('radio1').checked = true;

function iniciarIntervalo() {
    intervalId = setInterval(proximaImg, 9000);
}

function proximaImg() {
    cont++;
    if (cont > 3) {
        cont = 1;
    }
    document.getElementById('radio' + cont).checked = true;
}

function pararIntervalo() {
    clearInterval(intervalId);
}

document.querySelector('.left-arrow').addEventListener('click', () => {
    cont--;
    if (cont < 1) {
        cont = 3;
    }
    document.getElementById('radio' + cont).checked = true;
    pararIntervalo();
    iniciarIntervalo();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    cont++;
    if (cont > 3) {
        cont = 1;
    }
    document.getElementById('radio' + cont).checked = true;
    pararIntervalo();
    iniciarIntervalo();
});

// Iniciar o intervalo quando o script é carregado
iniciarIntervalo();
