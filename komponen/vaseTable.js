import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function VaseTable(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/vaseTable/WoodenTable_02_4k.gltf', (gltf) => {
        const vase_table = gltf.scene;
        
        vase_table.position.set(11, 0, 7);
        vase_table.scale.set(8, 8, 8);
        scene.add(vase_table);

        console.log("Meja berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan Meja:", error);
    });
}
