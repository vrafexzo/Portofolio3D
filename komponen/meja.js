import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { physicsWorld } from '../physics_world.js';
import * as THREE from "three"


export function Meja(scene) {
    const loader = new GLTFLoader();

    loader.load('./mesh/meja/wooden_table_02_1k.gltf', (gltf) => {
        const meja = gltf.scene;

        // Posisi, skala, dan rotasi meja tetap sama
        meja.position.set(10.4, -1.5, -1); 
        meja.scale.set(6, 6, 6); 
        meja.rotation.y = Math.PI / 2;
        scene.add(meja);

        // Yang perlu diubah adalah posisi bounding box
        // Sesuaikan y (tinggi) agar sejajar dengan kaki meja
        // Posisi bounding box sekarang mengacu pada bagian bawah meja
        const position = new THREE.Vector3(10.4, 2.5, -1); // y diatur sesuai tinggi kaki meja
        const size = new THREE.Vector3(6, 9.89, 6); // tinggi disesuaikan dengan tebal meja

        physicsWorld.addStaticObject({
            mesh: meja,
            size,
            center: position,
        });

        console.log("Meja berhasil dimasukkan ke dalam scene dengan bounding box yang disesuaikan.");
    });
}
export function Keyboard(scene) {
    const loader = new GLTFLoader();

    loader.load('./mesh/keyboardObj/Keyboard.gltf', (gltf) => {
        const keyboard = gltf.scene;

        keyboard.position.set(9.5, 4, -1.5);
        keyboard.scale.set(0.04, 0.08, 0.04);
        keyboard.rotation.y = Math.PI / -2;

        scene.add(keyboard);

        physicsWorld.addFurnitureBody(keyboard, 0.9);

        console.log("Keyboard berhasil dimuat.");
    });
}

export function Mouse(scene) {
    const loader = new GLTFLoader();

    loader.load('./mesh/mouse/Mouse.gltf', (gltf) => {
        const mouse = gltf.scene;

        mouse.position.set(9, 3.9, 1.5);
        mouse.scale.set(0.05, 0.05, 0.05);
        mouse.rotation.x = Math.PI / -2;

        scene.add(mouse);

        physicsWorld.addFurnitureBody(mouse, 0.5);

        console.log("Mouse berhasil dimuat.");
    });
}