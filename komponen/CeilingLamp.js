import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function CeilingLamp(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/ceilingLamp/modern_ceiling_lamp_01_4k.gltf', (gltf) => {
        const lamp = gltf.scene;
        
        lamp.position.set(0, 13.5, 0);
        lamp.scale.set(2.5, 2.5, 2.5);

        scene.add(lamp);
        console.log("lampu berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan lampu:", error);
    });
}
