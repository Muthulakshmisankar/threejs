import { Component, OnInit } from '@angular/core';
import { GenerateScene } from '../geometric-shapes/geo-shape/generate-scene';
import { GenerateMaterial } from './generate-materials.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {

  constructor(public threeService: GenerateMaterial) { }

  ngOnInit() {
    this.threeService.createScene();
    this.threeService.createFog('lightblue', 1, 2);  
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
      y: 20,
      z: 0
    }
    this.threeService.addLight(0Xffffff, 5, lightPosition);
    this.threeService.createBoxGeometry(5, 5, 2, 'PhongBox', 'MeshPhongMaterial');
    this.setPositionForMesh('PhongBox', -8, 2, 35)

    this.threeService.createBoxGeometry(5, 5, 2, 'LambertBox', 'MeshLambertMaterial');
    this.setPositionForMesh('LambertBox', -8, 5, 15)

    this.threeService.createBoxGeometry(5, 5, 2, 'BasicBox', 'MeshBasicMaterial');
    this.setPositionForMesh('BasicBox', -8, -7, 30)

    this.threeService.createBoxGeometry(5, 5, 2, 'ToonBox', 'MeshToonMaterial');
    this.setPositionForMesh('ToonBox', -8, -10, 45)

    this.threeService.createBoxGeometry(5, 5, 2, 'standardBox', 'MeshStandardMaterial');
    this.setPositionForMesh('standardBox', -8, -14, 65)

    this.threeService.createBoxGeometry(5, 5, 2, 'physicalBox', 'MeshPhysicalMaterial');
    this.setPositionForMesh('physicalBox', -8, -16, 85)

    this.threeService.createBoxGeometry(5, 5, 2, 'shadowBox', 'ShadowMaterial');
    this.setPositionForMesh('shadowBox', -8, -5, 60)

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
