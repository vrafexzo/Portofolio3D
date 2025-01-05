import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function MejaMakan(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/mejaMakan/round_wooden_table_01_2k.gltf', (gltf) => { // https://polyhaven.com/
        const mejaM = gltf.scene;
        
        mejaM.position.set(-10.5, 0, -2);
        mejaM.scale.set(2.5, 2.5, 2.5);
        scene.add(mejaM);

        console.log("Meja makan berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan Meja makan:", error);
    });
}