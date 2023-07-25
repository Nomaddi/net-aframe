var Speech = true;
var audio1 = new Audio('../assets/wav/action.wav');
var audio2 = new Audio('../assets/wav/swoosh.wav');
var not360video = false;

AFRAME.registerComponent('click-listener', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
        });
    }
});
AFRAME.registerComponent('audiohandler', {
    init: function () {
        let playing = false;
        let audio = document.querySelector("#playAudio");
        this.el.addEventListener('click', () => {
            if (!playing) {
                audio.play();
            } else {
                audio.pause();
                audio.currentTime = 0;
            }
            playing = !playing;
        });
    }
})
AFRAME.registerComponent('navigate', {
    schema: { url: { default: '' } },
    init: function () {
        var data = this.data;
        this.el.addEventListener('click', function () {
            window.location = data.url;
        });
    }
});
function speakInfo(narration) {
    var audio_msg = new SpeechSynthesisUtterance(narration);
    if (Speech === true) {
        window.speechSynthesis.speak(audio_msg);
    }
}
function changeOrb(orb_num) {
    document.getElementById('orbSky').setAttribute('material', 'src: #orb' + orb_num.toString());   
    removeScene();
}
function removeScene() {
    document.getElementById('building').setAttribute('visible', false);
    document.getElementById('artworkPosition1').setAttribute('visible', false);
    document.getElementById('video-screen').setAttribute('visible', false);
    document.getElementById('piano').setAttribute('visible', false);
    document.getElementById('portal-1').setAttribute('visible', false);
    document.getElementById('entorno2').setAttribute('visible', false);
    document.getElementById('ui').setAttribute('visible', false);
    document.getElementById('objetos').setAttribute('visible', false);
    document.getElementById('ReturnIsland').setAttribute('visible', true);
}
function restoreScene() {
    document.getElementById('orbSky').setAttribute('material', 'src: #orb1');
    document.getElementById('building').setAttribute('visible', true);
    document.getElementById('artworkPosition1').setAttribute('visible', true);
    document.getElementById('video-screen').setAttribute('visible', true);
    document.getElementById('piano').setAttribute('visible', true);
    document.getElementById('portal-1').setAttribute('visible', true);
    document.getElementById('entorno2').setAttribute('visible', true);
    document.getElementById('ui').setAttribute('visible', true);
    document.getElementById('objetos').setAttribute('visible', true);
    document.getElementById('ReturnIsland').setAttribute('visible', false);
}
function sqrImg(imgNum) {
    document.getElementById('orb_2Dimg' + imgNum).setAttribute('visible', true);
    document.getElementById('OrbName_place' + imgNum).setAttribute('visible', true);
}
function dspImg(dimgNum) {
    document.getElementById('orb_2Dimg' + dimgNum).setAttribute('visible', false);
    document.getElementById('OrbName_place' + dimgNum).setAttribute('visible', false);
}
function playSwoosh() {
    audio2.play();
}

function playBlip() {
    audio1.play();
}
function playSound() {
}
function play360() {
    //document.getElementById('vrVideo360').setAttribute('visible', true);
    document.getElementById('orbSky').setAttribute('visible', false);
}
function STOPplay360() {
    //document.getElementById('vrVideo360').setAttribute('visible', false);
    document.getElementById('orbSky').setAttribute('visible', true);
}