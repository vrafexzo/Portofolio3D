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
    }
}