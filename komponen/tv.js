import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

export function TV(scene) {
    const mtlLoader = new MTLLoader();
    mtlLoader.load('./mesh/tvObj/MI SMART TV.mtl', (materials) => { // https://free3d.com/
        materials.preload(); // Siapkan material

        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials); // pasang material ke OBJLoader
        objLoader.load('./mesh/tvObj/MI SMART TV.obj', (obj) => { // https://free3d.com/
            obj.position.set(10, 5, -1);
            obj.scale.set(3, 3, 3);
            obj.rotation.y = Math.PI / -2;

            scene.add(obj);
            console.log("TV berhasil dimuat dengan material.");
        });
    }, undefined, (error) => {
        console.error('Gagal memuat file .mtl:', error);
    });
}
