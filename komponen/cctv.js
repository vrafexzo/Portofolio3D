import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function CCTV(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/cctv/security_camera_01_8k.gltf', (gltf) => {
        const cctv = gltf.scene;
        
        cctv.position.set(11.5, 15.2, -11);
        cctv.scale.set(6, 6, 6);
        cctv.rotation.y = Math.PI / -6;
        cctv.rotation.x = Math.PI / 6;

        scene.add(cctv);
        console.log("CCTV berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan CCTV:", error);
    });
}
