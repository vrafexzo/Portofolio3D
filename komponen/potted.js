import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function Potted(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/potted/potted_plant_02_1k.gltf', (gltf) => { // https://polyhaven.com/
        const potted = gltf.scene;
        
        potted.position.set(-10.5, -0.5, 9);
        potted.scale.set(4, 4, 4);
        potted.rotation.y = Math.PI / 3;
        scene.add(potted);
        console.log("Potted berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan Potted:", error);
    });
}
