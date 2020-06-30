'use strict';
//al arrancar la página se ejecuta el número aleatorio
// escuchar el botón Prueba que recoge el valor del input y lo compara con el número aleatorio + aumentan los intentos.

//Cuando la jugadora introduzca un número mayor que el aleatorio y pulse en Prueba: Demasiado alto.
// Cuando la jugadora introduzca un número menor que el aleatorio y pulse en Prueba: Demasiado bajo.
// Cuando la jugadora introduzca un número igual que el aleatorio y pulse en Prueba: Has ganado campeona!!!
// Cuando la jugadora no introduzca un número válido y pulse en Prueba: El número debe estar entre 1 y 100.

const button = document.querySelector('.js-btn');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * 100);
}
console.log(getRandomNumber());

function handleTryButton() {}

button.addEventListener('click', handleTryButton);
