import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'; // https://threejs.org/docs/?q=objloader#examples/en/loaders/OBJLoader
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'; // https://threejs.org/docs/?q=mtl#examples/en/loaders/MTLLoader

export function Meja(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/meja/wooden_table_02_1k.gltf', (gltf) => { // https://polyhaven.com/
        const meja = gltf.scene;
        
        meja.position.set(10.4, -1.1, -1);
        meja.scale.set(6, 6, 6);
        meja.rotation.y = Math.PI / 2;

        scene.add(meja);
        console.log("Meja berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan Meja:", error);
    });
}

export function Keyboard(scene) {
    const mtlLoader = new MTLLoader();
    mtlLoader.load('./mesh/keyboardObj/lowprofilemechanicalkeyboard.mtl', (materials) => { // https://free3d.com/
        materials.preload(); // Siapkan material

        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials); 
        objLoader.load('./mesh/keyboardObj/lowprofilemechanicalkeyboard.obj', (obj) => { // https://free3d.com/
            obj.position.set(9.5, 3.9, -1.5);
            obj.scale.set(0.04, 0.08, 0.04);
            obj.rotation.y = Math.PI / -2;

            scene.add(obj);
            console.log("Keyboard berhasil dimuat.");
        });
    }, undefined, (error) => {
        console.error('Gagal memuat mtl:', error);
    });
}

export function Mouse(scene) {
    const mtlLoader = new MTLLoader();
    mtlLoader.load('./mesh/mouse/10106_Computer Mouse_v1_L3.mtl', (materials) => { // https://free3d.com/
        materials.preload(); // Siapkan material

        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials); 
        objLoader.load('./mesh/mouse/10106_Computer Mouse_v1_L3.obj', (obj) => { // https://free3d.com/
            obj.position.set(9, 3.9, 1.5);
            obj.scale.set(0.05, 0.05, 0.05);
            obj.rotation.x = Math.PI / -2;

            scene.add(obj);
            console.log("Mouse berhasil dimuat.");
        });
    }, undefined, (error) => {
        console.error('Gagal memuat mtl:', error);
    });
}

export function Gelas(scene) {
    const mtlLoader = new MTLLoader();
    mtlLoader.load('./mesh/gelas/Glass_of_Whiskey-Obj.mtl', (materials) => { // https://free3d.com/
        materials.preload(); // Siapkan material

        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials); 
        objLoader.load('./mesh/gelas/Glass_of_Whiskey-Obj.obj', (obj) => { // https://free3d.com/
            obj.position.set(9, 6, -4);
            obj.scale.set(0.08, 0.08, 0.08);

            scene.add(obj);
            console.log("Gelas berhasil dimuat.");
        });
    }, undefined, (error) => {
        console.error('Gagal memuat mtl:', error);
    });
}

