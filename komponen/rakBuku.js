import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function rakBuku(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/rakBuku/wooden_display_shelves_01_8k.gltf', (gltf) => {
        const rak_buku = gltf.scene;
        
        rak_buku.position.set(11.2, 0, -9.2);
        rak_buku.scale.set(6, 6, 6);

        scene.add(rak_buku);
        console.log("Rak Buku berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan Rak Buku:", error);
    });
}

export function Buku(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/rakBuku/book/book_encyclopedia_set_01_4k.gltf', (gltf) => {
        const buku = gltf.scene;
        
        buku.position.set(11, 7, -12.2);
        buku.scale.set(3,3,3);
        buku.rotation.y = Math.PI / -2; 

        scene.add(buku);
        console.log("Buku berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan Buku:", error);
    });
}

export function Wine(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/rakBuku/wine/wine_bottles_01_4k.gltf', (gltf) => {
        const wine = gltf.scene;
        
        wine.position.set(11, 4.8, -9.5);
        wine.scale.set(4.5,4.5,4.5);
        wine.rotation.y = Math.PI / -2; 

        scene.add(wine);
        console.log("Wine berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan Wine:", error);
    });
}

export function Kuda(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/rakBuku/kuda/horse_statue_01_4k.gltf', (gltf) => {
        const kuda = gltf.scene;
        
        kuda.position.set(11, 4.8, -11.3);
        kuda.scale.set(7,7,7);
        kuda.rotation.y = Math.PI / -2; 

        scene.add(kuda);
        console.log("Kuda berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan Kuda:", error);
    });
}

export function KotakMisteri(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/rakBuku/kotak/treasure_chest_4k.gltf', (gltf) => {
        const kotak = gltf.scene;
        
        kotak.position.set(11, 2.7, -7.1);
        kotak.scale.set(1.8,1.8,1.8);
        kotak.rotation.y = Math.PI / -2; 

        scene.add(kotak);
        console.log("kotak berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan kotak:", error);
    });
}

export function pasBunga(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/rakBuku/pot/ceramic_vase_01_4k.gltf', (gltf) => {
        const pas_bunga = gltf.scene;
        
        pas_bunga.position.set(11, 2.7, -9.2);
        pas_bunga.scale.set(3.5,3.5,3.5);

        scene.add(pas_bunga);
        console.log("Pas Bunga berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan Pas Bunga:", error);
    });
}

export function Potted2(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/rakBuku/potted2/potted_plant_01_4k.gltf', (gltf) => {
        const potted2 = gltf.scene;
        
        potted2.position.set(11, 2.7, -11.3);
        potted2.scale.set(1.2,1.2,1.2);

        scene.add(potted2);
        console.log("Potted2 berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan Potted2:", error);
    });
}

export function Bebek(scene) { // Sumber code referensi : https://threejs.org/docs/?q=GLTFLoader#examples/en/loaders/GLTFLoader
    const loader = new GLTFLoader();

    loader.load('./mesh/rakBuku/bebek/rubber_duck_toy_4k.gltf', (gltf) => {
        const bebek = gltf.scene;
        
        bebek.position.set(11, 7, -9.2);
        bebek.scale.set(4,4,4);
        bebek.rotation.y = Math.PI / -2; 

        scene.add(bebek);
        console.log("Bebek berhasil dimasukkan!");
    }, undefined, (error) => {
        console.error("Gagal memasukkan Bebek:", error);
    });
}