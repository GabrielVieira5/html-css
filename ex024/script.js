function numerohabitante (x) {
const numero = Number(prompt('porra'));
const habitante = document.getElementById(x);

return habitante.innerHTML = numero;
}

numerohabitante ('sp-hab');
numerohabitante ('mg-hab');
numerohabitante ('rj-hab');


