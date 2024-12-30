import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function PictureWall(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/foto/hanging_picture_frame_02_4k.gltf', (gltf) => {
        const picture_wall = gltf.scene;
        
        picture_wall.position.set(-12.4, 13, -1);
        picture_wall.scale.set(6, 6, 6);
        picture_wall.rotation.y = Math.PI / 2;
        scene.add(picture_wall);
        console.log("Foto berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan Foto:", error);
    });
}
