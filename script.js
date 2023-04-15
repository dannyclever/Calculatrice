'use strict';

const display = document.querySelector('#display');
const numeros = document.querySelectorAll('[id*=tecla]'/** Todo elemento cujo o seu id tem ou é o trecho tecla */)
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = true;
let operador;
let numeroAnterior;

const atualizarDisplay = (texto) => {
    if (novoNumero) {
        display.textContent = texto;
        novoNumero = false;
    } else {
        display.textContent += texto;
    }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach(numero => numero.addEventListener('click', inserirNumero));

const selecionarOperador = (evento) => {
    novoNumero = true;
    operador = evento.target.textContent;
    numeroAnterior = display.textContent;
}

operadores.forEach(operador => operador.addEventListener('click', selecionarOperador))