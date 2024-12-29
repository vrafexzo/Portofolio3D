import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function rakBuku(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/rakBuku/wooden_display_shelves_01_8k.gltf', (gltf) => {
        const rak_buku = gltf.scene;
        
        rak_buku.position.set(10.6, 0, -9.2);
        rak_buku.scale.set(10, 6, 6);

        scene.add(rak_buku);
        console.log("Rak Buku berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan Rak Buku:", error);
    });
}
