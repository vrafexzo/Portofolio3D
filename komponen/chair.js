import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function kursi(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/kursi/plastic_monobloc_chair_01_4k.gltf', (gltf) => {
        const chair = gltf.scene;
        
        chair.position.set(5, 0, -1);
        chair.scale.set(6, 6, 6);
        chair.rotation.y = Math.PI / 3;
        scene.add(chair);
        console.log("Kursi berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan kursi:", error);
    });
}
