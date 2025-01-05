import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function Vase(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/vase/antique_ceramic_vase_01_1k.gltf', (gltf) => { // https://polyhaven.com/
        const vase = gltf.scene;
        
        vase.position.set(11, 3, 7);
        vase.scale.set(7, 7, 7);
        scene.add(vase);

        console.log("vase berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan vase:", error);
    });
}
