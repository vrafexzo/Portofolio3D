import * as THREE from "three"

export default class LightingHelper{

    constructor(scene){
        this.ambientLight = new THREE.AmbientLight(0xffffff,0.5);
        // this.ambientLight.castShadow=true
        scene.add(this.ambientLight);

        // // this.spotLight = new THREE.SpotLight(0xffff00,100,100,Math.PI/8);
        // // this.spotLight.position.set(0,6,-1);
        // // this.spotLight.castShadow = true;
        // // scene.add(this.spotLight);

        // this.slight_helper = new THREE.SpotLightHelper(this.spotLight, 0xff0000)
        // scene.add(this.slight_helper);

        // this.directionalLight=new THREE.DirectionalLight(0xffffff, 0.5);
        // scene.add(this.directionalLight);
        // this.directionalLight.castShadow=true

        this.pointLight=new THREE.PointLight(0xffffff);
        this.pointLight.castShadow=true
        scene.add(this.pointLight);

        this.plightHelper= new THREE.PointLightHelper(this.pointLight,0.2,0xff0000)
        scene.add(this.plightHelper)
    }
    
// const ambient = new THREE.AmbientLight(0xffffff, 0.09);
// scene.add(ambient);

// let pointLight= new THREE.PointLight(0xff0000,0.5,50);
// pointLight.position.set(3,2,0);
// scene.add(pointLight)

// const pLightHelper = new THREE.PointLightHelper(pointLight,0.2, 0x00ff00);
// scene.add(pLightHelper);

// let hemi = new THREE.HemisphereLight(0x0000ff,0x000000,0.5)
// scene.add(hemi);

// const sLight = new THREE.SpotLight(0xffffff, 15, 15, Math.PI/8);
// sLight.position.set(0, 3, -3);
// sLight.target = mesh;
// sLight.castShadow = true;
// scene.add(sLight);

// const sLightHelper = new THREE.SpotLightHelper(sLight, 0xff0000);
// scene.add(sLightHelper);

// const dLight = new THREE.DirectionalLight(0x00ff00, 0.5);
// dLight.position.set(3,0,0);
// dLight.target.position.set(1,2,0);
// dLight.target.updateMatrixWorld();
// scene.add(dLight);

// scene.add(new THREE.DirectionalLightHelper(dLight,0.5,0xff0000));
}