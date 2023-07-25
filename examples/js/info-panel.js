// JavaScript
AFRAME.registerComponent('image-controller', {
  schema: {
    imageId: { type: 'string' } // Atributo para el ID de la imagen
  },
  init: function () {
    const data = this.data;
    const el = this.el;

    // Asignar el evento 'click' a la miniatura
    el.addEventListener('click', function () {
      const thumbnail = this; // 'this' se refiere a la miniatura clickeada
      const src = thumbnail.getAttribute('src'); // Obtener el src de la miniatura clickeada
      const zoom = document.getElementById(data.imageId); // Obtener el elemento del 'zoom' según el ID proporcionado

      // Mostrar la imagen clickeada en el 'zoom'
      zoom.setAttribute('src', src);
      zoom.setAttribute('visible', true);

      // Ocultar las otras vistas previas ('zoom' o 'zoom2')
      // const otherZooms = ['zoom', 'zoom2', 'zoom3']; // Agrega aquí los ids de las otras vistas previas
      // otherZooms.splice(otherZooms.indexOf(data.imageId), 1);
      // otherZooms.forEach((otherZoomId) => {
      //   const otherZoom = document.getElementById(otherZoomId);
      //   otherZoom.setAttribute('visible', false);
      // });
    });
  }
});
// // Asignar evento 'click' para ocultar zoom al hacer clic en él
// const zoomEl = document.getElementById('zoom');
// zoomEl.addEventListener('click', () => {
//   zoomEl.setAttribute('visible', false);
// });

// // Asignar evento 'click' para ocultar zoom2 al hacer clic en él
// const zoom2El = document.getElementById('zoom2');
// zoom2El.addEventListener('click', () => {
//   zoom2El.setAttribute('visible', false);
// });

// // Asignar evento 'click' para ocultar zoom2 al hacer clic en él
// const zoom3El = document.getElementById('zoom3');
// zoom3El.addEventListener('click', () => {
//   zoom3El.setAttribute('visible', false);
// });


