import * as THREE from "three"

export default class PlaneMesh{
    constructor(scene){
        const wood_texture = new THREE.TextureLoader().load("./texture/tiles/Tiles081_1K-JPG_Color.jpg")
        // const wood_height = new THREE.TextureLoader().load("./texture/brick.png")
        // const wood_normal = new THREE.TextureLoader().load("./texture/grass.jpg")
        // const wood_ao = new THREE.TextureLoader().load("./texture/alphamap.jpg")

        wood_texture.repeat.set(5,5);
        wood_texture.wrapS = THREE.RepeatWrapping;
        wood_texture.wrapT = THREE.RepeatWrapping;
        wood_texture.needsUpdate = true;

        const plane_geo = new THREE.PlaneGeometry(25,25,50,50);
        const plane_material = new THREE.MeshPhongMaterial({map: wood_texture})
        this.plane_mesh = new THREE.Mesh(plane_geo,plane_material)
        this.plane_mesh.rotation.x= -Math.PI/2
        this.plane_mesh.position.y= 0.5
        this.plane_mesh.receiveShadow = true;
        scene.add(this.plane_mesh);



        // Dinding Belakang
        const back_texture = new THREE.TextureLoader().load("./mesh/dinding/painted_plaster_wall_diff_1k.jpg"); 
        back_texture.repeat.set(2, 2);
        back_texture.wrapS = THREE.RepeatWrapping;
        back_texture.wrapT = THREE.RepeatWrapping;

        const back_geo = new THREE.PlaneGeometry(25, 18);
        const back_material = new THREE.MeshStandardMaterial({
            map: back_texture,
            roughness: 0.9, // https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.roughness
            metalness: 0.0, // https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.metalness
            side: THREE.DoubleSide,
        });
        const wall_back = new THREE.Mesh(back_geo, back_material);
        wall_back.position.set(0, 8.5, -12.5);
        wall_back.rotation.y = Math.PI;
        wall_back.receiveShadow = true;
        scene.add(wall_back);



        // Dinding Kiri
        const left_texture = new THREE.TextureLoader().load("./mesh/dinding/painted_plaster_wall_diff_1k.jpg") 
        left_texture.repeat.set(1,1);
        left_texture.wrapS - THREE.RepeatWrapping;
        left_texture.wrapT = THREE.RepeatWrapping;

        const left_geo = new THREE.PlaneGeometry(25, 18);
        const left_material = new THREE.MeshStandardMaterial({
            map: left_texture,
            roughness: 0.9, // https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.roughness
            metalness: 0.0, // https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.metalness
            side: THREE.DoubleSide,
        });
        const wall_left = new THREE.Mesh(left_geo, left_material);
        wall_left.position.set(-12.5, 8.5, 0);
        wall_left.rotation.y = Math.PI / 2;
        wall_left.receiveShadow = true;
        scene.add(wall_left);


        
        // Dinding Kanan
        const right_texture = new THREE.TextureLoader().load("./mesh/dinding/painted_plaster_wall_diff_1k.jpg"); 
        right_texture.repeat.set(2, 2);
        right_texture.wrapS = THREE.RepeatWrapping;
        right_texture.wrapT = THREE.RepeatWrapping;

        const right_geo = new THREE.PlaneGeometry(25, 18);
        const right_material = new THREE.MeshStandardMaterial({
            map: right_texture,
            roughness: 0.9, // https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.roughness
            metalness: 0.0, // https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.metalness
            side: THREE.DoubleSide,
        });
        const wall_right = new THREE.Mesh(right_geo, right_material);
        wall_right.position.set(12.5, 8.5, 0);
        wall_right.rotation.y = -Math.PI / 2;
        wall_right.receiveShadow = true;
        scene.add(wall_right);



        // Dinding Atas 
        const ceiling_texture = new THREE.TextureLoader().load("./mesh/dinding/painted_plaster_wall_diff_1k.jpg");
        ceiling_texture.repeat.set(2, 2);
        ceiling_texture.wrapS = THREE.RepeatWrapping;
        ceiling_texture.wrapT = THREE.RepeatWrapping;

        const ceiling_geo = new THREE.PlaneGeometry(25, 25); 
        const ceiling_material = new THREE.MeshStandardMaterial({
            color: 0xaaaaaa,
            map: ceiling_texture,
            roughness: 0.9, // https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.roughness
            metalness: 0.0, // https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.metalness
            side: THREE.DoubleSide, 
        });

        const wall_top = new THREE.Mesh(ceiling_geo, ceiling_material);

        wall_top.position.set(0, 17.5, 0); 
        wall_top.rotation.x = Math.PI / 2; 
        wall_top.receiveShadow = true;
        scene.add(wall_top);



        // Dinding Depan
        const front_texture = new THREE.TextureLoader().load("./mesh/dinding/painted_plaster_wall_diff_1k.jpg");
        front_texture.repeat.set(2, 2);
        front_texture.wrapS = THREE.RepeatWrapping;
        front_texture.wrapT = THREE.RepeatWrapping;

        const front_geo = new THREE.PlaneGeometry(25, 18);
        const front_material = new THREE.MeshStandardMaterial({
            map: front_texture,
            roughness: 0.9, // Kekasaran material
            metalness: 0.0, // Metalik material
            side: THREE.DoubleSide, // Kedua sisi dapat terlihat
        });
        const wall_front = new THREE.Mesh(front_geo, front_material);
        wall_front.position.set(0, 8.5, 12.5); // Atur posisi ke depan
        wall_front.rotation.y = 0; // Tidak ada rotasi
        wall_front.receiveShadow = true; // Dinding dapat menerima bayangan
        scene.add(wall_front);

    }
}