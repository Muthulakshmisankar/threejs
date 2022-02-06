import { Component, OnDestroy, OnInit } from '@angular/core';
import * as THREE from 'three';
declare var window: any;
@Component({
  selector: 'app-draw-line',
  templateUrl: './draw-line.component.html',
  styleUrls: ['./draw-line.component.scss']
})
export class DrawLineComponent implements OnInit, OnDestroy {

  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer();
  camera = new THREE.PerspectiveCamera(150, window.innerWidth / window.innerHeight, 0.1, 200);
  line: any;
  dashedLine: any;

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
    this.line = new THREE.Line(geometry, material);

    const dashedmaterial = new THREE.LineDashedMaterial({
      color: 0xffffff,
      linewidth: 1.4,
      scale: 1,
      dashSize: 3,
      gapSize: 2,
    });
    const dashedPoints = [];
    dashedPoints.push(new THREE.Vector3(-10, 0, 0));
    dashedPoints.push(new THREE.Vector3(0, 16, 0));
    dashedPoints.push(new THREE.Vector3(10, 0, 0));
    const dashedGeometry = new THREE.BufferGeometry().setFromPoints(dashedPoints);
    this.dashedLine = new THREE.Line(dashedGeometry, dashedmaterial);

    this.scene.add(this.line);
    this.scene.add(this.dashedLine);
    this.camera.position.z = 5;
    this.renderer.render(this.scene, this.camera);
  }
  ngOnDestroy() {
    let canvasEle : any = document.getElementsByTagName('canvas')
    console.log(canvasEle)
    document.activeElement.removeChild(canvasEle[0]);
    // canvasEle[0].style.display = 'none';
    this.scene.remove(this.line);
    this.scene.remove(this.dashedLine);
    this.renderer.render(this.scene, this.camera);
  
  }
}
