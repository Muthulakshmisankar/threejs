import { Injectable } from "@angular/core";
import * as THREE from 'three'
declare var window: any;
@Injectable({
    providedIn: 'root'
})

export class GenerateScene {
    scene;
    renderer;
    camera;
    MeshArray = [];
    createScene() {
        this.scene = new THREE.Scene();
    }
    addRenderer() {
        this.renderer = new THREE.WebGLRenderer({ alpha: true , antialias: true});
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }
    setCamera(fov, aspect, near, far, camPos, lookAtPos) {
        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        this.camera.position.set(camPos.x, camPos.y, camPos.z);
        this.camera.lookAt(lookAtPos.x, lookAtPos.y, lookAtPos.z);
    }

    addLight(color, intensity, lightPos) {
        const light = new THREE.AmbientLight(color, intensity);
        light.position.set(lightPos.x, lightPos.y, lightPos.z);
        this.scene.add(light);
        const pointLight = new THREE.PointLight(color, intensity);
        pointLight.position.set(lightPos.x, lightPos.y, lightPos.z);
        this.scene.add(pointLight)
    }

    createCylinderGeometry(radiusTop, radiusBottom, height, radialSegments, meshName) {
        const geometry = new THREE.CylinderGeometry(4, 2, 4, 32);
        const material = new THREE.MeshPhongMaterial({
             color: 0xf44336 

        })
        const mesh = new THREE.Mesh(geometry, material);
        mesh.name = meshName
        this.MeshArray.push(mesh);
        this.scene.add(mesh)
    }
    createBoxGeometry(boxwidth, boxheight, boxdepth, meshName) {
        const geometry = new THREE.BoxGeometry(boxwidth, boxheight, boxdepth);
        const material = new THREE.MeshPhongMaterial({
            color: 0x663399, //violet
          
        })
        const mesh = new THREE.Mesh(geometry, material);
        mesh.name = meshName
        this.MeshArray.push(mesh);
        this.scene.add(mesh)
    }
    createDoDecahedron(radius, meshName) {
        // const radius = 7;  // ui: radius
        const geometry = new THREE.DodecahedronGeometry(radius);
        const material = new THREE.MeshBasicMaterial({
            color: 0xf44336 //red

        })
        const mesh = new THREE.Mesh(geometry, material);
        mesh.name = meshName
        this.MeshArray.push(mesh);
        this.scene.add(mesh)
    }
    createDoDecahedronWithDetail(radius, detail, meshName) {
        //         const radius = 7;  // ui: radius
        // const detail = 2;  // ui: detail
        const geometry = new THREE.DodecahedronGeometry(radius, detail);
        const material = new THREE.MeshBasicMaterial({
            color: 0xff6f00 //orange
        })
        const mesh = new THREE.Mesh(geometry, material);
        mesh.name = meshName
        this.MeshArray.push(mesh);
        this.scene.add(mesh)
    }
    createExtrudeGeometry(meshName) {
        const shape = new THREE.Shape();
        const x = -2.5;
        const y = -5;
        shape.moveTo(x + 2.5, y + 2.5);
        shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
        shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
        shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
        shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
        shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
        shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

        const extrudeSettings = {
            steps: 2,  // ui: steps
            depth: 2,  // ui: depth
            bevelEnabled: true,  // ui: bevelEnabled
            bevelThickness: 1,  // ui: bevelThickness
            bevelSize: 1,  // ui: bevelSize
            bevelSegments: 2,  // ui: bevelSegments
        };

        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        const material = new THREE.MeshBasicMaterial({
            color: 0x17afa5 //greenishblue
        })
        const mesh = new THREE.Mesh(geometry, material);
        mesh.name = meshName
        this.MeshArray.push(mesh);
        this.scene.add(mesh)

    }

    createPlaneGeometry(meshName) {
        const geometry = new THREE.PlaneGeometry(5, 4, 12);
        const material = new THREE.MeshBasicMaterial({
            color: 0x4e342e //brown
        })
        const mesh = new THREE.Mesh(geometry, material);
        mesh.name = meshName
        this.MeshArray.push(mesh);
        this.scene.add(mesh)
    }
    removeMesh() {
        this.MeshArray.forEach((element) => {
            this.scene.remove(element);
        })
        let canvasEle: any = document.getElementsByTagName('canvas')
        console.log(canvasEle)
        if (canvasEle.length) {
            document.activeElement.removeChild(canvasEle[0]);
        }
        this.renderer.render(this.scene, this.camera);
    }
    startRender() {
        requestAnimationFrame(this.render.bind(this));
    }
    render(time) {
        time *= 0.001;  // convert time to seconds
      
        if (this.scene.children.length) {
            this.scene.children.forEach((element ,index)=> {
                const speed = .1 + index  * .05;
                const rot = time * speed;
                if (element.type == 'Mesh') {
                    element.rotation.x = rot;
                    element.rotation.y = rot;
                    // element.rotation.z = time;
                }
            });
        }

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render.bind(this));
    }
}