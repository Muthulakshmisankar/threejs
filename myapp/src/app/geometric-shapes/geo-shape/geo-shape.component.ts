import { Component, OnInit } from '@angular/core';
import { GenerateScene } from './generate-scene';

@Component({
  selector: 'app-geo-shape',
  templateUrl: './geo-shape.component.html',
  styleUrls: ['./geo-shape.component.scss']
})
export class GeoShapeComponent implements OnInit {

  constructor(public threeService: GenerateScene) { }

  ngOnInit() {
    this.threeService.createScene();
    this.threeService.addRenderer();
    let pos = {
      x: 10,
      y: 5,
      z: 0
    }
    let cameraLookAtPos = {
      x: 0,
      y: 0,
      z: 0
    }
    this.threeService.setCamera(75, 5, 0.1, 10000, pos, cameraLookAtPos);
    // this.threeService.setCamera(75, 50, 150, 10000, pos, cameraLookAtPos);
    let lightPosition = {
      x: 0,
      y: -2,
      z: -5
    }
    this.threeService.addLight(0X05fb05, 1, lightPosition);

    this.threeService.createCylinderGeometry(4, 4, 6, 4, 'cylinder')
    this.setPositionForMesh('cylinder', -15, 5, 61)

    this.threeService.createBoxGeometry(5, 5, 2, 'Box');
    this.setPositionForMesh('Box', -8, 2, 35)

    this.threeService.createDoDecahedron(4, 'decahedron');
    this.setPositionForMesh('decahedron', -8, 4, 0)

    this.threeService.createDoDecahedronWithDetail(3, 2, 'DoDecahedronwithdetail');
    this.setPositionForMesh('DoDecahedronwithdetail', -8, 4, -14)

    this.threeService.createExtrudeGeometry('TextBasic')
    this.setPositionForMesh('TextBasic', -30, 5, -65 )
   
    this.threeService.createPlaneGeometry('planegeo');
    this.setPositionForMesh('planegeo' , -5 , -6, 40)
    // let getPlaneGeoObj = this.threeService.scene.getObjectByName('planegeo');
    // getPlaneGeoObj.position.y = -3
    this.threeService.startRender();
  }
  ngOnDestroy() {
    this.threeService.removeMesh()
  }
  setPositionForMesh(meshName, x, y, z) {
    let getMeshObject = this.threeService.scene.getObjectByName(meshName);
    getMeshObject.position.x = x
    getMeshObject.position.y = y
    getMeshObject.position.z = z
  }

}
