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
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 80000);
  //FOV-Field of View
  //view ratio
  //near
  //far
  loader = new GLTFLoader();
  url = "assets/ftm/scene.gltf"

  constructor() { }

  ngOnInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.camera.position.set(0, 5, 0);
    this.camera.lookAt(0, 0, 0);
    this.loader.load(this.url, ((gltf) => {
      // gltf.scene.scale.set(0, 2, 2);
      // gltf.scene.position.set(220, 10, 400)
      this.scene.add(gltf.scene);

      this.camera.position.z = 7
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
