AFRAME.registerComponent('video-controller', {
    schema: {
        videoId: { type: 'string' } // Atributo para el ID del video
    },
    init: function () {
        this.videoEl = document.querySelector(`#${this.data.videoId}`);
        var activadorEl = this.el;

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
});

function changeVolume(videoId, amount) {
    const videoElement = document.getElementById(videoId);
    if (videoElement) {
      // Asegúrate de que el volumen esté en el rango de 0 a 1
      videoElement.volume = Math.min(1, Math.max(0, videoElement.volume + amount));
    }
  }