import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function Alaram(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/alaram/alarm_clock_01_4k.gltf', (gltf) => {
        const alaram = gltf.scene;
        
        alaram.position.set(-11, 2.5, -2);
        alaram.scale.set(6.5, 6.5, 6.5);
        alaram.rotation.y = Math.PI / 3;
        scene.add(alaram);

        console.log("Alaram berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan Alaram:", error);
    });
}
