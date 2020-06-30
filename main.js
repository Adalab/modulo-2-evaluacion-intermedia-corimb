'use strict';
//al arrancar la página se ejecuta el número aleatorio
// escuchar el botón Prueba que recoge el valor del input y lo compara con el número aleatorio + aumentan los intentos.

//Cuando la jugadora introduzca un número mayor que el aleatorio y pulse en Prueba: Demasiado alto.
// Cuando la jugadora introduzca un número menor que el aleatorio y pulse en Prueba: Demasiado bajo.
// Cuando la jugadora introduzca un número igual que el aleatorio y pulse en Prueba: Has ganado campeona!!!
// Cuando la jugadora no introduzca un número válido y pulse en Prueba: El número debe estar entre 1 y 100.

const button = document.querySelector('.js-btn');
const firstTrack = document.querySelector('.js-track');
const attempts = document.querySelector('.js-attempts');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * 100);
}
console.log(getRandomNumber());

let attemptsTrying = 0;
const randomNumber = getRandomNumber();

function handleTryButton(ev) {
  ev.preventDefault();
  const inputValue = document.querySelector('.js-number').value;
  console.log(inputValue);
  attemptsTrying++;
  console.log(getRandomNumber());

  if (inputValue > randomNumber) {
    firstTrack.innerHTML = 'Pista: Demasiado alto';
    attempts.innerHTML = 'Número de intentos:' + attemptsTrying;
  }
  if (inputValue < randomNumber) {
    firstTrack.innerHTML = 'Pista: Demasiado bajo';
    attempts.innerHTML = 'Número de intentos:' + attemptsTrying;
  }
  if (inputValue === randomNumber) {
    firstTrack.innerHTML = 'Has ganado campeona';
  }
  if (inputValue > 100 || inputValue < 0) {
    firstTrack.innerHTML = 'Pista: El número debe estar entre 1 y 100';
    attempts.innerHTML = 'Número de intentos:' + attemptsTrying;
  }
}

button.addEventListener('click', handleTryButton);
