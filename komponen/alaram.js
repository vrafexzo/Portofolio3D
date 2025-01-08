import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function Alaram(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/alaram/alarm_clock_01_1k.gltf', (gltf) => { // https://polyhaven.com/
        const alaram = gltf.scene;
        
        alaram.position.set(-11, 2.1, -2);
        alaram.scale.set(6.5, 6.5, 6.5);
        alaram.rotation.y = Math.PI / 3;
        alaram.name = "alarm"
        scene.add(alaram);

        console.log("Alaram berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan Alaram:", error);
    });
}
