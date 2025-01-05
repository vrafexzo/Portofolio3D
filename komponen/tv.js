import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'; // https://threejs.org/docs/?q=objloader#examples/en/loaders/OBJLoader
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'; // https://threejs.org/docs/?q=mtl#examples/en/loaders/MTLLoader

export function TV(scene) {
    const mtlLoader = new MTLLoader();
    mtlLoader.load('./mesh/tvObj/MI SMART TV.mtl', (materials) => { // https://free3d.com/
        materials.preload(); // Siapkan material

        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials); 
        objLoader.load('./mesh/tvObj/MI SMART TV.obj', (obj) => { // https://free3d.com/
            obj.position.set(10, 5, -1);
            obj.scale.set(2.8, 2.8, 2.8);
            obj.rotation.y = Math.PI / -2;

            scene.add(obj);
            console.log("TV berhasil dimuat dengan material.");
        });
    }, undefined, (error) => {
        console.error('Gagal memuat file .mtl:', error);
    });
}
