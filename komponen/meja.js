import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function Meja(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/meja/wooden_table_02_1k.gltf', (gltf) => {
        const meja = gltf.scene;
        
        meja.position.set(10.4, 0, -1);
        meja.scale.set(6, 6, 6);
        meja.rotation.y = Math.PI / 2;

        scene.add(meja);
        console.log("Meja berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan Meja:", error);
    });
}
