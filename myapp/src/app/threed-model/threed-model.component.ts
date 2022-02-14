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
  renderer = new THREE.WebGLRenderer();
  camera = new THREE.PerspectiveCamera(150, window.innerHeight / window.innerWidth, 0.1, 200)
  loader = new GLTFLoader();
  url = "assets/ftm/scene.gltf"

  constructor() { }

  ngOnInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.camera.position.set(0, 0, 200);
    this.camera.lookAt(0, 0, 0);
    this.loader.load(this.url, ((gltf) => {
      this.scene.add(gltf.scene);
      this.camera.position.z = 15
      this.renderer.render(this.scene, this.camera);
    }), undefined, ((err) => { console.log(err) }))
  }
  ngOnDestroy() {
    let canvasEle : any = document.getElementsByTagName('canvas')
    console.log(canvasEle)
    document.activeElement.removeChild(canvasEle[0]);
    // canvasEle[0].style.display = 'none';
    this.scene.remove(this.loader);
    this.renderer.render(this.scene, this.camera);
  
  }
}
