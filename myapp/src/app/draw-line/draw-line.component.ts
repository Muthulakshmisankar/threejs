import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
declare var window: any;
@Component({
  selector: 'app-draw-line',
  templateUrl: './draw-line.component.html',
  styleUrls: ['./draw-line.component.scss']
})
export class DrawLineComponent implements OnInit {

  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer();
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 500);


  constructor() { }

  ngOnInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.camera.position.set(0, 0, 100);
    this.camera.lookAt(0, 0, 0);
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const points = [];
    points.push(new THREE.Vector3(- 10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    this.scene.add(line);
    this.camera.position.z = 5;
    this.renderer.render(this.scene, this.camera);
  }

}
