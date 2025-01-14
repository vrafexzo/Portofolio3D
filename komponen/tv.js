import { GLTFLoader } from "/three/examples/jsm/loaders/GLTFLoader.js"; // https://threejs.org/docs/?q=gltf#examples/en/loaders/GLTFLoader
import { physicsWorld } from '../physics_world.js';
import { MaskPass } from "three/examples/jsm/Addons.js";

export function TV(scene) {
    const loader = new GLTFLoader();

    loader.load('./mesh/tvObj/TV.gltf', (gltf) => {
        const tv = gltf.scene;

        tv.position.set(10, 8.5, 0); // Posisi awal TV
        tv.scale.set(1.6, 1.6, 1.6); // Skala TV
        tv.rotation.y = Math.PI / -2; // Rotasi TV
        tv.name = 'tv';
        scene.add(tv);

        physicsWorld.addFurnitureBody(tv, {
            mass :60,
            linearDamping : 0,
            angularDamping : 0
        });

        console.log("TV berhasil dimuat dengan GLTF dan fisika diterapkan.");
    }, undefined, (error) => {
        console.error('Gagal memuat file GLTF (.glb):', error);
    });
}
