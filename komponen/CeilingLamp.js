import { AmbientLight, PointLight } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function CeilingLamp(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/ceilingLamp/modern_ceiling_lamp_01_1k.gltf', (gltf) => { // https://polyhaven.com/
        const lamp = gltf.scene;
        
        lamp.position.set(0, 13.5, 0);
        lamp.scale.set(2.5, 2.5, 2.5);

        const lampLight = new PointLight(0xffffff, 50, 50);
        lampLight.position.set(0, -0.5, 0);
        lampLight.castShadow = true;
        lamp.add(lampLight);

        const lampAmbient = new AmbientLight(0xffffff, 1);
        lampAmbient.castShadow = true;
        lamp.add(lampAmbient);

        scene.add(lamp);
        console.log("lampu berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan lampu:", error);
    });
}
