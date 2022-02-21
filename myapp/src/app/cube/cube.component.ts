import { Component, OnInit } from '@angular/core';
import * as THREE from 'three'
declare var window: any;

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit {
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer();
  fov = 75;
  // aspect = window.innerHeight / window.innerWidth
  aspect =1
  near = 0.1
  far = 10000
  camera;
  geometry;
  material;
  cube;
  constructor() { }


  ngOnInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far);
    this.camera.position.set(0, 5, 0);
    this.camera.lookAt(0, 0, 0);
    let boxwidth = 1
    let boxheight = 1
    let boxdepth = 1
    this.geometry = new THREE.BoxGeometry(boxwidth, boxheight, boxdepth);
    this.material = new THREE.MeshBasicMaterial({ color: 0x44aa88 })
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.cube);
    // this.renderer.render(this.scene, this.camera)  

    requestAnimationFrame(this.render.bind(this));
  }
  render(time) {
    time *= 0.001;  // convert time to seconds

    this.cube.rotation.x = time;
    this.cube.rotation.y = time;

    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(this.render.bind(this));
  }
}
