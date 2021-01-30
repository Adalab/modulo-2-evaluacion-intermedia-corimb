'use strict';
//al arrancar la página se ejecuta el número aleatorio
// escuchar el botón Prueba que recoge el valor del input y lo compara con el número aleatorio + aumentan los intentos.

//Cuando la jugadora introduzca un número mayor que el aleatorio y pulse en Prueba: Demasiado alto.
// Cuando la jugadora introduzca un número menor que el aleatorio y pulse en Prueba: Demasiado bajo.
// Cuando la jugadora introduzca un número igual que el aleatorio y pulse en Prueba: Has ganado campeona!!!
// Cuando la jugadora no introduzca un número válido y pulse en Prueba: El número debe estar entre 1 y 100.

const button = document.querySelector('.js-btn');
const replay = document.querySelector('.try-again-btn');
const track = document.querySelector('.js-track');
const attempts = document.querySelector('.js-attempts');
const inputValue = document.querySelector('.js-number');
const gyphOne = document.querySelector('.giphy-embed-one');
const gyphTwo = document.querySelector('.giphy-embed-two');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log('Mi numero aleatorio es;', randomNumber);

function updateTrack() {
  // creamos la variable feedback vacía que recoge los innerHTML de las pistas cuando se va ejecutando la función
  let feedback = '';
  const value = parseInt(inputValue.value);
  console.log(value);
  // usamos isNaN para avisar de que se tiene que introducir un número si no está escrito en el value del input. Se traduce en: If value is not a number: Debe introducirse un número
  if (isNaN(value)) {
    feedback = 'Debe introducirse un número';
  } else {
    if (value >= 1 && value <= 100) {
      if (value > randomNumber) {
        feedback = 'Pista: Demasiado alto';
      } else if (value < randomNumber) {
        feedback = 'Pista: Demasiado bajo';
      } else if (value === randomNumber) {
        feedback = '¡Has ganado!';
        gyphGenerator();
        replay.classList.remove('hidden');
        gyphTwo.classList.add('hidden');
        gyphOne.classList.add('hidden');
      }
    } else {
      feedback = 'Pista: El número debe estar entre 1 y 100';
    }
    // ejecutamos el contador solo cuando pasa por el primer else (si se introduce un número)
    updateCounter();
  }

  printFeedback(feedback);
}

function printFeedback(feedback) {
  track.innerHTML = feedback;
}

let attemptsTrying = 0;

function updateCounter() {
  attemptsTrying = attemptsTrying + 1;
  attempts.innerHTML = attemptsTrying;
  if (attemptsTrying > 2){
    gyphOne.classList.remove('hidden');
  } if (attemptsTrying > 4){
    gyphOne.classList.add('hidden');
    gyphTwo.classList.remove('hidden');
  }
}

function reload() {
  // refresca la página cuando hacemos click en el botón Volver a jugar
  location.reload();
}

function handleSubmitEnter(ev) {
  // evita que se envie el form*
  if (ev.key === 'Enter') {
    ev.preventDefault();
    updateTrack();
  }
}

button.addEventListener('click', updateTrack);
replay.addEventListener('click', reload);
inputValue.addEventListener('keydown', handleSubmitEnter);


// * ponemos el prevent default en el evento al pulsar la tecla Enter para que evite enviar el formulario puesto que está relacionado con el valor del input. Lo que hacemos en realidad es evitar el submit del form.
// Si lo ponemos en la función de updateTrack solo se ejecuta una vez y no tiene en cuenta la tecla Enter que es un evento que sucede después.


const api_key = "dc6zaTOxFJmzC"

function gyphGenerator () {
  fetch(`http://api.giphy.com/v1/gifs/search?q=win&api_key=${api_key}`)
  .then(response => response.json())
    .then(json => {
      json.data
        .map(gif => gif.images.fixed_height.url)
        .forEach(url => {
          let img = document.createElement('img')
          img.src = url
          document.body.appendChild(img)
        })
    })
    .catch(error => document.body.appendChild = error)
}
