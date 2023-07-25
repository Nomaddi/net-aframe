// Espera a que se cargue el contenido del DOM
document.addEventListener('DOMContentLoaded', function () {
    // Mic estado
    let micEnabled = true;
    // Elemento de botón de micrófono
    var micBtnEle = document.getElementById('mic-btn');
    //sonido del ambiente
    // Obtén el elemento de audio y el botón de mute
    var audio = document.getElementById('playAudio');
    var muteButton = document.getElementById('muteButton');
    // Establece el volumen inicial al 20%
    audio.volume = 0.02;
    
    // Manejar el clic del botón del micrófono (Silenciar y No silenciar)
    micBtnEle.addEventListener('click', function () {
        NAF.connection.adapter.enableMicrophone(!micEnabled);
        micEnabled = !micEnabled;
        micBtnEle.innerHTML = micEnabled ? '<i class="fas fa-microphone"></i>' : '<i class="fas fa-microphone-slash"></i>';

    });

    // Agrega un event listener al botón de mute
    muteButton.addEventListener('click', function () {
        // Verifica el estado actual del sonido (mute o no mute)
        if (audio.muted) {
          // Si está muteado, desmutea el sonido
          audio.muted = false;
          muteButton.innerHTML = '<i class="fas fa-volume-down"></i>';
        } else {
          // Si no está muteado, mutea el sonido
          audio.muted = true;
          muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
      });

});



    

    