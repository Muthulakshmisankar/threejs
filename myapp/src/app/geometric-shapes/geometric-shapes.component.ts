import { Component, OnInit } from '@angular/core';
import * as THREE from 'three'
declare var window: any;
@Component({
  selector: 'app-geometric-shapes',
  templateUrl: './geometric-shapes.component.html',
  styleUrls: ['./geometric-shapes.component.scss']
})
export class GeometricShapesComponent implements OnInit {
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  fov = 75;
  aspect = window.innerHeight / window.innerWidth
  // aspect = 1
  near = 0.1
  far = 10000
  camera;
  geometry;
  material;
  cube;
  circle;
  boxGeometryMesh;
  coneGeometryMesh;
  coneOpenEndedMesh;
  constructor() { }

  ngOnInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    let singleCube: any = document.getElementById('shapes');
    singleCube.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far);
    this.camera.position.set(0, 5, 0);
    let color = 0X812131
    let intensity = 10;
    const light = new THREE.AmbientLight(color, intensity);
    light.position.set(-5,0, 1);
    this.scene.add(light);
    this.camera.lookAt(-2, -2, 0);
    let boxwidth = 0.1
    let boxheight = 0.1
    let boxdepth = 1
    this.geometry = new THREE.BoxGeometry(boxwidth, boxheight, boxdepth);
    // this.material = new THREE.MeshBasicMaterial({ color: 0x44aa88 })
    this.material = new THREE.MeshPhongMaterial({ color: (new THREE.Color()).setHSL(0 / 8, 1, 0.5) })
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.cube);
    this.cube.position.x = -0.5;
    const geometry = new THREE.CircleGeometry(5, 32);
    const material = new THREE.MeshBasicMaterial({ color:  0X214682 });
    const circle = new THREE.Mesh(geometry, material);
    this.scene.add(circle);


    const width = 0.8;  // ui: width
    const height = 0.8;  // ui: height
    const depth = 0.8;  // ui: depth
    const widthSegments = 4;  // ui: widthSegments
    const heightSegments = 4;  // ui: heightSegments
    const depthSegments = 4;  // ui: depthSegments
    const boxgeometry = new THREE.BoxGeometry(
      width, height, depth,
      widthSegments, heightSegments, depthSegments);
    const boxgeometryMaterial = new THREE.MeshPhongMaterial({ color: 0x44aa88 })
    this.boxGeometryMesh = new THREE.Mesh(boxgeometry, boxgeometryMaterial);
    this.scene.add(this.boxGeometryMesh)

    const radius = 0.5;  // ui: radius
    const coneheight = 1;  // ui: height
    const radialSegments = 14;  // ui: radialSegments
    const conegeometry = new THREE.ConeGeometry(radius, coneheight, radialSegments);
    const conegeometryMaterial = new THREE.MeshPhongMaterial({ color: 0x44aa88 })
    this.coneGeometryMesh = new THREE.Mesh(conegeometry, conegeometryMaterial);
    this.coneGeometryMesh.position.y = -2
    this.coneGeometryMesh.position.x = 2
    this.scene.add(this.coneGeometryMesh)


    const coneOpenEndedradius = 0.5;  // ui: radius
    const coneOpenEndedheight = 1;  // ui: height
    const coneOpenEndedradialSegments = 16;  // ui: radialSegments
    const coneOpenEndedheightSegments = 2;  // ui: heightSegments
    const openEnded = true;  // ui: openEnded
    const thetaStart = Math.PI * 0.25;  // ui: thetaStart
    const thetaLength = Math.PI * 1.5;  // ui: thetaLength
    const coneOpenEndedgeometry = new THREE.ConeGeometry(
      coneOpenEndedradius, coneOpenEndedheight,
      coneOpenEndedradialSegments, coneOpenEndedheightSegments,
      openEnded,
      thetaStart, thetaLength);
    const coneOpenEndedGeometryMaterial = new THREE.MeshPhongMaterial({ color: 0x44aa88 })
    this.coneOpenEndedMesh = new THREE.Mesh(coneOpenEndedgeometry, coneOpenEndedGeometryMaterial);
    this.coneOpenEndedMesh.position.x = -1
    this.coneOpenEndedMesh.position.y = 2
    this.scene.add(this.coneOpenEndedMesh)

    
    requestAnimationFrame(this.render.bind(this));
  }
  render(time) {
    time *= 0.001;  // convert time to seconds

    this.cube.rotation.x = time;
    this.cube.rotation.y = time;
    this.boxGeometryMesh.rotation.x = time;
    this.boxGeometryMesh.rotation.y = time;
    this.coneGeometryMesh.rotation.x = time;
    this.coneGeometryMesh.rotation.y = time;
    this.coneGeometryMesh.rotation.z = time / 2;

    this.coneOpenEndedMesh.rotation.x = time;
    this.coneOpenEndedMesh.rotation.y = time;
    this.coneOpenEndedMesh.rotation.z = time;

    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(this.render.bind(this));
  }
  ngOnDestroy() {
    let canvasEle: any = document.getElementsByTagName('canvas')
    console.log(canvasEle)
    if (canvasEle.length) {
      document.activeElement.removeChild(canvasEle[0]);
    }
    // canvasEle[0].style.display = 'none';
    this.scene.remove(this.cube);
    this.scene.remove(this.boxGeometryMesh);
    this.scene.remove(this.coneGeometryMesh);
    this.renderer.render(this.scene, this.camera);

  }
}
