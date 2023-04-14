'use strict';

const display = document.querySelector('#display');
const numeros = document.querySelectorAll('[id*=tecla]'/** Todo elemento cujo o seu id tem ou é o trecho tecla */)

const inserirNumero = (evento) => display.textContent = evento.target.textContent;

numeros.forEach(numero => numero.addEventListener('click', inserirNumero));