const head = document.getElementById('head');

const sittingPosition = "0 1.3 0";
const standingPosition = "0 1.65 0";

// Función para cambiar la posición de la cabeza cuando se sienta
function sitOnChair() {
    head.setAttribute('position', sittingPosition);
}

// Función para restaurar la posición de la cabeza cuando se levanta
function standUp() {
    head.setAttribute('position', standingPosition);
}


AFRAME.registerComponent('foo', {
    init: function() {
      this.el.addEventListener('hit', (e) => {
        sitOnChair();
      })
      this.el.addEventListener('hitend', (e) => {
        console.log('hitend')
        standUp();
      })
    }
  })