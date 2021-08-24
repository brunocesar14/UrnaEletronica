let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');



let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numerohtml = '';

    for (let i = 0; i < etapa.numeros; i++) {
        if (i === 0) {
            numerohtml += '<div class="numero pisca"></div>';
        } else {
            numerohtml += '<div class="numero "></div>';
        }
    }


    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none;'
    lateral.innerHTML = '';
    numeros.innerHTML = numerohtml;


}

function atualizaInterface() {

}


function clicou(n) {
    let elnumero = document.querySelector('.numero.pisca');
    if (elnumero !== null) {
        elnumero.innerHTML = n;
        numero = `${numero}${n}`;
    }
}
function branco() {
    alert("Clicou em BRANCO!");
}
function corrige() {
    alert("Clicou em CORRIGE!");
}
function confirma() {
    alert("Cliocu em CORFIRMA!")
}

comecarEtapa();