// Mirror Material component for A-Frame by Alfredo Consebola 2017.
AFRAME.registerComponent('mirror', {
    schema: {
      resolution: {
        type: 'number',
        default: 128
      },
      refraction: {
        type: 'number',
        default: 0.95
      },
      color: {
        type: 'color',
        default: "#FFFFFF"
      },
      distance: {
        type: 'number',
        default: 1000
      },
      interval: {
        type: 'number',
        default: 1000
      },
      repeat: {
        type: 'boolean',
        default: false
      }
    },
    /**
     * Set if component needs multiple instancing.
     */
    multiple: false,
    init: function() {
      this.counter = this.data.interval;
      const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(this.data.resolution, {
        format: THREE.RGBAFormat,
        generateMipmaps: true,
        minFilter: THREE.LinearMipmapLinearFilter
      });
      this.cam = new THREE.CubeCamera(0.5, this.data.distance, cubeRenderTarget);
      this.el.object3D.add(this.cam);
      this.mirrorMaterial = new THREE.MeshBasicMaterial({
        color: this.data.color,
        refractionRatio: this.data.refraction,
        envMap: this.cam.renderTarget.texture
      });
      this.done = false;
      var mirrormat = this.mirrorMaterial;
      this.mesh = this.el.getObject3D('mesh');
      if (this.mesh) {
        this.mesh.traverse(function(child) {
          if (child instanceof THREE.Mesh) child.material = mirrormat;
        });
      }
    },
    tick: function(t, dt) {
      if (!this.done) {
        if (this.counter > 0) {
          this.counter -= dt;
        } else {
          this.mesh = this.el.getObject3D('mesh');
          if (this.mesh) {
            this.mesh.visible = false;
            let target = new THREE.Vector3();
            this.el.object3D.getWorldPosition(target);
            this.cam.position = target
            // this.el.sceneEl.object3D.updateMatrixWorld()
            this.cam.update(AFRAME.scenes[0].renderer, this.el.sceneEl.object3D);
            var mirrormat = this.mirrorMaterial;
            this.mesh.traverse(function(child) {
              if (child instanceof THREE.Mesh) child.material = mirrormat;
            });
            this.mesh.visible = true;
            if (!this.data.repeat) {
              this.done = true;
              this.counter = this.data.interval;
            }
          }
        }
      }
    }
  });