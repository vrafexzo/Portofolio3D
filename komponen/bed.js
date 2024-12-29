import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function BED(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/bed/GothicBed_01_4k.gltf', (gltf) => {
        const bed = gltf.scene;
        
        bed.position.set(-7, 0, -8.5);
        bed.scale.set(5, 5, 5);
        bed.rotation.y = Math.PI / 2;
        scene.add(bed);

        console.log("Bed berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan Bed:", error);
    });
}
