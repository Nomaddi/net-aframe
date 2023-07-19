AFRAME.registerComponent('video-controller', {
    init: function () {
        this.videoEl = document.querySelector('#video1');
        var activadorEl = document.querySelector('#activador');


        this.el.addEventListener('hit', (e) => {
            if (this.videoEl.paused) {
                this.videoEl.play();
            }
        })
        this.el.addEventListener('hitend', (e) => {
            if (!this.videoEl.paused) {
                this.videoEl.pause();
                this.videoEl.currentTime = 0;
            }
        })
    }
})

const videoElement = document.getElementById('video1');

// Función para cambiar el volumen
function changeVolume(amount) {
    // Asegúrate de que el volumen esté en el rango de 0 a 1
    videoElement.volume = Math.min(1, Math.max(0, videoElement.volume + amount));
}