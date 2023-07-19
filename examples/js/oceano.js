AFRAME.registerPrimitive('a-ocean', {
  defaultComponents: {
    ocean: {},
    rotation: { x: -90, y: 0, z: 0 }
  },
  mappings: {
    width: 'ocean.width',
    depth: 'ocean.depth',
    density: 'ocean.density',
    amplitude: 'ocean.amplitude',
    amplitudevariance: 'ocean.amplitudeVariance',
    speed: 'ocean.speed',
    speedvariance: 'ocean.speedVariance',
    color: 'ocean.color',
    opacity: 'ocean.opacity'
  }
});

AFRAME.registerComponent('ocean', {
    schema: {
      // Dimensions of the ocean area.
      width: { default: 10, min: 0 },
      depth: { default: 10, min: 0 },

      // Density of waves.
      density: { default: 10 },

      // Wave amplitude and variance.
      amplitude: { default: 0.1 },
      amplitudeVariance: { default: 0.3 },

      // Wave speed and variance.
      speed: { default: 1 },
      speedVariance: { default: 2 },

      // Material.
      color: { default: '#7AD2F7', type: 'color' },
      opacity: { default: 0.8 }
    },


    play: function () {
      const el = this.el,
        data = this.data;
      let material = el.components.material;

      const geometry = new THREE.PlaneGeometry(data.width, data.depth, data.density, data.density);
      THREE.BufferGeometryUtils.mergeVertices(geometry)
      this.waves = [];
      for (let v, i = 2, l = geometry.attributes.position.array.length; i < l; i += 3) {
        v = geometry.attributes.position.array[i]
        this.waves.push({
          z: v,
          ang: Math.random() * Math.PI * 2,
          amp: data.amplitude + Math.random() * data.amplitudeVariance,
          speed: (data.speed + Math.random() * data.speedVariance) / 1000 // radians / frame
        });
      }

      if (!material) {
        material = {};
        material.material = new THREE.MeshPhongMaterial({
          color: data.color,
          transparent: data.opacity < 1,
          opacity: data.opacity,
          flatShading: true,
        });
      }

      this.mesh = new THREE.Mesh(geometry, material.material);
      el.setObject3D('mesh', this.mesh);
    },

    remove: function () {
      this.el.removeObject3D('mesh');
    },

    tick: function (t, dt) {
      if (!dt) return;

      for (let v, vprops, i = 0, j = 2; i < this.waves.length; i++, j += 3) {
        vprops = this.waves[i];
        v = vprops.z + Math.sin(vprops.ang) * vprops.amp;
        this.mesh.geometry.attributes.position.array[j] = v
        vprops.ang += vprops.speed * dt;
      }

      this.mesh.geometry.attributes.position.needsUpdate = true;
    }
  });