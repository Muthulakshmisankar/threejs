import { Component, OnInit } from '@angular/core';
import * as THREE from 'three'
declare var window 
@Component({
  selector: 'app-update-things',
  templateUrl: './update-things.component.html',
  styleUrls: ['./update-things.component.scss']
})
export class UpdateThingsComponent implements OnInit {
  // scene = new THREE.Scene();
  // renderer = new THREE.WebGLRenderer();
  // camera = new THREE.PerspectiveCamera(150, window.innerWidth / window.innerHeight, 0.1, 200);
  // objects = [];
  // radius  =1;
  // width = 6;
  // height = 6;


  constructor() { }

  ngOnInit() {
  //   this.renderer.setSize(window.innerWidth, window.innerHeight);
  //   document.body.appendChild(this.renderer.domElement);
  //   this.camera.position.set(0, 0, 500);
  //   this.camera.lookAt(0, 0, 0);
  //  this.scene.add(this.objects)
  }
  ngOnDestroy() {
    // let canvasEle : any = document.getElementsByTagName('canvas')
    // console.log(canvasEle)
    // document.activeElement.removeChild(canvasEle[0]);
    // // canvasEle[0].style.display = 'none';
    // this.scene.remove(this.object);
    // this.renderer.render(this.scene, this.camera);
  
  }
}
