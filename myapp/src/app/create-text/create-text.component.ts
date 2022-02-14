import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
// import * as fontTypeFace from 'three/examples/fonts'
declare var window: any;

@Component({
  selector: 'app-create-text',
  templateUrl: './create-text.component.html',
  styleUrls: ['./create-text.component.scss']
})
export class CreateTextComponent implements OnInit {
  FontLoader: FontLoader;
  // fontTypeFace: fontTypeFace;
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer();
  camera = new THREE.PerspectiveCamera(150, window.innerWidth / window.innerHeight, 0.1, 200);

  textMesh1: any;
  mesh: any;
  materials: any;
  constructor() { }

  ngOnInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.camera.position.set(0, 0, 100);
    this.camera.lookAt(0, 0, 0);
    var loader = new FontLoader();
    let gihuburl = 'https://github.com/mrdoob/three.js/blob/master/examples/fonts/helvetiker_bold.typeface.json'
    loader.load(gihuburl, function (font) {
      var textGeo = new THREE.TextGeometry("My Text", {
        font: font,
        size: 200,
        height: 50,
        curveSegments: 12,
        bevelThickness: 2,
        bevelSize: 5,
        bevelEnabled: true
      });

      let textMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
      this.mesh = new THREE.Mesh(textGeo, textMaterial);
      this.mesh.position.set(0, 10, 10);
      this.scene.add(this.mesh);

    });

    this.camera.position.z = 5;
    this.renderer.render(this.scene, this.camera);
  }
  ngOnDestroy() {
    let canvasEle: any = document.getElementsByTagName('canvas')
    console.log(canvasEle)
    document.activeElement.removeChild(canvasEle[0]);
    // canvasEle[0].style.display = 'none';
    this.scene.remove(this.mesh);
    this.renderer.render(this.scene, this.camera);

  }
}
