import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function Buku(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/book/book_encyclopedia_set_01_4k.gltf', (gltf) => {
        const buku = gltf.scene;
        
        buku.position.set(10.6, 0, -9.2);
        buku.scale.set(10, 6, 6);

        scene.add(buku);
        console.log("Buku berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan Buku:", error);
    });
}
