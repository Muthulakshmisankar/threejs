import { Component, OnDestroy, OnInit } from '@angular/core';
import * as THREE from 'three';
declare var window: any;
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-threed-model',
  templateUrl: './threed-model.component.html',
  styleUrls: ['./threed-model.component.scss']
})
export class ThreedModelComponent implements OnInit {
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer({

    alpha: true,

    antialias: true

  });
  aspect = (window.innerWidth / window.innerHeight) 

  camera = new THREE.PerspectiveCamera(150, this.aspect, 0.1, 9999999999999);
  //FOV-Field of View
  //view ratio
  //near
  //far
  loader = new GLTFLoader();
  url = "assets/ftm/scene.gltf"
  zoomMode: boolean = false
  press: boolean = false
  sensitivity: number = 0.02;
  constructor() { }

  ngOnInit() {
    console.log(this.aspect)
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.camera.position.set(1, 1, 6);
    this.camera.lookAt(0, 0, 0);
    this.loader.load(this.url, ((gltf) => {
      // gltf.scene.scale.set(0, 2, 2);
      // gltf.scene.position.set(220, 10, 400)
      this.scene.add(gltf.scene);

      this.camera.position.z = 7
      this.renderer.render(this.scene, this.camera);

    }), undefined, ((err) => { console.log(err) }))

    this.renderer.domElement.addEventListener('mousemove', event => {
      if (!this.press) { return }

      if (event.button == 0) {
        this.camera.position.y -= event.movementY * this.sensitivity / 0.10
        this.camera.position.x -= event.movementX * this.sensitivity / 0.10
        this.camera.position.z -= event.movementX * this.sensitivity / 0.10
      } else if (event.button == 2) {
        this.camera.quaternion.y -= event.movementX * this.sensitivity / 10
        this.camera.quaternion.x -= event.movementY * this.sensitivity / 10
      }

      this.updateCallback()
    })

    this.renderer.domElement.addEventListener('mousedown', () => { this.press = true })
    this.renderer.domElement.addEventListener('mouseup', () => { this.press = false })
    this.renderer.domElement.addEventListener('mouseleave', () => { this.press = false })

    document.addEventListener('keydown', event => {
      if (event.key == 'Shift') {
        this.zoomMode = true
      }
    })

    document.addEventListener('keyup', event => {
      if (event.key == 'Shift') {
        this.zoomMode = false
      }
    })

    // this.renderer.domElement.addEventListener('mousewheel', event => {
    //   if (this.zoomMode) {
    //     this.camera.fov += event.wheelDelta * this.sensitivity
    //     this.camera.updateProjectionMatrix()
    //   } else {
    //     this.camera.position.z += event.wheelDelta * this.sensitivity
    //   }

    //   this.updateCallback()
    // })
  }
  updateCallback() {
    this.renderer.render(this.scene, this.camera);
  }
  ngOnDestroy() {
    let canvasEle: any = document.getElementsByTagName('canvas')
    console.log(canvasEle)
    document.activeElement.removeChild(canvasEle[0]);
    // canvasEle[0].style.display = 'none';
    this.scene.remove(this.loader);
    this.renderer.render(this.scene, this.camera);

  }
}
