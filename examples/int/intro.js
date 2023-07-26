// runs when user clicks button
AFRAME.registerComponent('start', {

    init: function () {
        // block pointer events until buttonEnter is clicked
        let uiDiv = document.getElementById("uiDiv");
        uiDiv.style["pointer-events"] = "auto";

        // set up background blocker
        uiDiv.style["background-color"] = "rgba(0, 0, 0, 1)";

        // indicate clickable with hand cursor (desktop)
        let buttonEnter = document.getElementById("buttonEnter");
        let sphere = document.getElementById("activador");

        buttonEnter.style.cursor = "pointer";

        // fade-in functionality
        let fadeIn = function () {
            // allow point events again
            uiDiv.style["pointer-events"] = "none";

            sphere.setAttribute('video-controller', 'videoId: video1');

            // remove startButton
            buttonEnter.parentNode.remove(buttonEnter);

            // fade out uiDiv background
            uiDiv.style["background-color"] = "rgba(0, 0, 0, 0.0)";
            uiDiv.style["transition"] = "background-color 1000ms linear";
        }

        // activate for desktop/touchscreen
        buttonEnter.addEventListener('touchstart', fadeIn);
        buttonEnter.addEventListener('mousedown', fadeIn);
    }
});

