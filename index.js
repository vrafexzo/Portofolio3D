import * as THREE from "three"
import * as dat from "dat.gui";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls.js"
import { FirstPersonControls } from "./node_modules/three/examples/jsm/controls/FirstPersonControls.js"
import { PointerLockControls } from "./node_modules/three/examples/jsm/controls/PointerLockControls.js"

import { TrackballControls } from "./node_modules/three/examples/jsm/controls/TrackballControls.js"
import PlaneMesh from "./plane_mesh.js"
import LightingHelper from "./light_setup.js"
import KeyboardHelpher from "./keyboard.js"
import { createCrosshair } from "./crosshair.js";

//scene= our 3d world
//camera= camera ke 3d world untuk menghasilkan 2d 
//renderer= menggambarkan hasil foto camera

const scene = new THREE.Scene();
const cam  =  new THREE.PerspectiveCamera(
    60,//angle
    window.innerWidth / window.innerHeight,//aspect rasio
    1, //jarak terdekat yang bisa diliat
    1000 // jarak terjauh yang bisa diliat
);

const renderer= new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);// ukuran canvas

renderer.shadowMap.type= THREE.BasicShadowMap
renderer.shadowMap.enabled = true

document.body.appendChild(renderer.domElement);// pasang canvas ke layar
cam.position.set(0,10,18)

renderer.setClearColor(0xffffff);
// const grid = new THREE.GridHelper(10,10,0xff0000,0x0000ff)
// scene.add(grid);
const crosshair = createCrosshair(cam);

// Tambahkan kamera ke scene (crosshair akan ikut ditambahkan karena sudah menjadi child dari kamera)
scene.add(cam);
const map_saya=new THREE.TextureLoader().load("./texture/bricks/Bricks059_1K-JPG_Color.jpg");
const map_normal=new THREE.TextureLoader().load("./texture/bricks/Bricks059_1K-JPG_NormalGL.jpg");
const map_rough=new THREE.TextureLoader().load("./texture/bricks/Bricks059_1K-JPG_Roughness.jpg");
const map_ao=new THREE.TextureLoader().load("./texture/bricks/Bricks059_1K-JPG_AmbientOcclusion.jpg");

const map_saya2=new THREE.TextureLoader().load("./texture/rock/Rock050_1K-JPG_Color.jpg");
const map_normal2=new THREE.TextureLoader().load("./texture/rock/Rock050_1K-JPG_NormalDX.jpg");
const map_rough2=new THREE.TextureLoader().load("./texture/rock/Rock050_1K-JPG_Roughness.jpg");
const map_ao2=new THREE.TextureLoader().load("./texture/rock/Rock050_1K-JPG_AmbientOcclusion.jpg");
// benda dalam 3d disebut maze
// mesh terdiri dari 2 geometry dan material
// geometry bnetuknya
// material itu warnanya

// const geo = new THREE.BoxGeometry(1,1,1);  // bikin geometry box ukuran 1x1x1
// const mat = new THREE.MeshPhongMaterial({map: map_saya, normalMap: map_normal}); // warna merah
// const mesh = new THREE.Mesh(geo, mat);// bikin bendanya
// scene.add(mesh); // masukin boxnya ke dunia kita


const texture1 = new THREE.TextureLoader().load('./texture/1.png');
const texture2 = new THREE.TextureLoader().load('./texture/2.png');
const texture3 = new THREE.TextureLoader().load('./texture/3.jpg');
const texture4 = new THREE.TextureLoader().load('./texture/4.jpg');
const texture5 = new THREE.TextureLoader().load('./texture/5.png');
const texture6 = new THREE.TextureLoader().load('./texture/6.jpg');
const texture7 = new THREE.TextureLoader().load('./texture/7.png');
const texture8 = new THREE.TextureLoader().load('./texture/8.png');
const texture9 = new THREE.TextureLoader().load('./texture/9.jpg');
const texture10 = new THREE.TextureLoader().load('./texture/10.png');
const texture11 = new THREE.TextureLoader().load('./texture/11.jpg');
const texture12 = new THREE.TextureLoader().load('./texture/12.jpg');
const texture13 = new THREE.TextureLoader().load('./texture/13.png');
const texture14 = new THREE.TextureLoader().load('./texture/14.jpg');
const texture15 = new THREE.TextureLoader().load('./texture/15.jpg');
const texture16 = new THREE.TextureLoader().load('./texture/16.jpg');
const texture17 = new THREE.TextureLoader().load('./texture/17.png');
const texture18 = new THREE.TextureLoader().load('./texture/18.png');
const texture19 = new THREE.TextureLoader().load('./texture/19.jpg');
const texture20 = new THREE.TextureLoader().load('./texture/20.jpg');

const mat_array= [
    new THREE.MeshPhongMaterial({ map: texture1 }),
    new THREE.MeshPhongMaterial({ map: texture2 }),
    new THREE.MeshPhongMaterial({ map: texture3 }),
    new THREE.MeshPhongMaterial({ map: texture4 }),
    new THREE.MeshPhongMaterial({ map: texture5 }),
    new THREE.MeshPhongMaterial({ map: texture6 }),
    new THREE.MeshPhongMaterial({ map: texture7 }),
    new THREE.MeshPhongMaterial({ map: texture8 }),
    new THREE.MeshPhongMaterial({ map: texture9 }),
    new THREE.MeshPhongMaterial({ map: texture10 }),
    new THREE.MeshPhongMaterial({ map: texture11 }),
    new THREE.MeshPhongMaterial({ map: texture12 }),
    new THREE.MeshPhongMaterial({ map: texture13 }),
    new THREE.MeshPhongMaterial({ map: texture14 }),
    new THREE.MeshPhongMaterial({ map: texture15 }),
    new THREE.MeshPhongMaterial({ map: texture16 }),
    new THREE.MeshPhongMaterial({ map: texture17 }),
    new THREE.MeshPhongMaterial({ map: texture18 }),
    new THREE.MeshPhongMaterial({ map: texture19 }),
    new THREE.MeshPhongMaterial({ map: texture20 }),
    
]

const geo = new THREE.BufferGeometry();
const vertices = new Float32Array([

    // Bawah kanan FIX
     0.0, 1.0, 2.0,
     0.0, -1.0, 2.0,
     2.0, 0.0, 1.0,
  
    // Bawah depan kanan FIX
     2.0, 0.0, 1.0,
     0.0, -1.0, 2.0,
     1.0, -2.0, 0.0,
  
    // Tengah bawah FIX
    -1.0, -2.0, 0.0,
    1.0, -2.0, 0.0,
    
     
     0.0, -1.0, 2.0,
  
    // Bawah depan kiri FIX
    0.0, -1.0, 2.0,
    -2.0, 0.0, 1.0,
     
    -1.0, -2.0, 0.0,
  
    // Bawah kiri FIX
    0.0, -1.0, 2.0,
     0.0, 1.0, 2.0,
    
    -2.0, 0.0, 1.0,
    // Atas FIX
    1.0, 2.0, 0.0,
    0.0, 1.0, -2.0,
    -1.0, 2.0, 0.0,
  
    // Atas kanan
     2.0, 0.0, -1.0,
     0.0, 1.0, -2.0,
     1.0, 2.0, 0.0,
  
    // Atas belakang kanan
    0.0, 1.0, -2.0,
     2.0, 0.0, -1.0,
    
     0.0, -1.0, -2.0,
  
    // Atas belakang kiri
    -2.0, 0.0, -1.0,
     0.0, 1.0, -2.0,
     0.0, -1.0, -2.0,
  
    // Atas kiri
    -1.0, 2.0, 0.0,
     0.0, 1.0, -2.0,
    -2.0, 0.0, -1.0,
  
    // Samping kiri
    -1.0, 2.0, 0.0,
    -2.0, 0.0, -1.0,
    -2.0, 0.0, 1.0,
  
    // Tengah samping kiri
    -2.0, 0.0, 1.0,
    -2.0, 0.0, -1.0,
    -1.0, -2.0, 0.0,
  
    // Tengah belakang kiri
    -2.0, 0.0, -1.0,
     0.0, -1.0, -2.0,
    -1.0, -2.0, 0.0,
  
    // Tengah belakang
     0.0, -1.0, -2.0,
     1.0, -2.0, 0.0,
    -1.0, -2.0, 0.0,
  
    // Tengah belakang kanan
    0.0, -1.0, -2.0,
     2.0, 0.0, -1.0,
     
     1.0, -2.0, 0.0,
  
    // Tengah samping kanan
    2.0, 0.0, -1.0,
     2.0, 0.0, 1.0,
     1.0, -2.0, 0.0,
  
    // Samping kanan
    2.0, 0.0, -1.0,
     1.0, 2.0, 0.0,
     
     2.0, 0.0, 1.0,
  
    // Kanan
    2.0, 0.0, 1.0,
     1.0, 2.0, 0.0,
     0.0, 1.0, 2.0,
  
    
  
    // Kiri FIX
    0.0, 1.0, 2.0,
    -1.0, 2.0, 0.0,
    -2.0, 0.0, 1.0,
  
    // Tengah FIX
    0.0, 1.0, 2.0,
     1.0, 2.0, 0.0,
    -1.0, 2.0, 0.0,
  ]);
  
  

let uvs = new Float32Array([
    0.0,0.0,//1
    1.0,0.0,
    0.5,1.25,

    0.0,0.0,//2
    1.0,0.0,
    0.5,1.3,

    -0.8,0.0,//3
    1.5,0.0,
    0.5,1.3,
    
    0.0,0.0,//4
    1.0,0.0,
    0.55,1.0,

    0.0,0.0,//5
    1.0,0.0,
    0.5,1.3,

    0.0,0.0,//6
    1.0,0.0,
    0.5,1.5,

    0.0,0.0,//7
    1.0,0.0,
    0.5,1.3,

    0.0,0.0,//8
    1.0,0.0,
    0.5,1.3,

    0.0,0.0,//9
    1.0,0.0,
    0.5,1.5,

    0.0,0.0,//10
    1.0,0.0,
    0.5,1.3,

    0.0,0.0,//11
    1.0,0.0,
    0.5,1.5,

    -0.8,0.0,//12
    1.2,0.0,
    0.5,1.5,

    0.0,0.0,//13
    1.0,0.0,
    0.5,1.3,

    -0.3,0.0,//14
    1.2,0.0,
    0.5,1.5,

    0.0,0.0,//15
    1.0,0.0,
    0.5,1.7,

    0.0,0.0,//16
    1.0,0.0,
    0.5,1.3,

    -0.5,0.0,//17
    1.5,0.0,
    0.5,1.4,

    0.0,0.0,//18
    1.0,0.0,
    0.5,1.5,

    -0.5,0.0,//19
    1.5,0.0,
    0.5,1.5,

    -0.5,0.0,//20
    1.5,0.0,
    0.5,1.5,

])

geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))
geo.computeVertexNormals(); //https://dustinpfister.github.io/2022/04/22/threejs-buffer-geometry-compute-vertex-normals/

let  faceCount =vertices.length/9; //https://stackoverflow.com/questions/55177718threejs-indexed-buffergeometry-with-2-materials
for (let i=0;i<faceCount;i++) {
  geo.addGroup(i*3,3,i); 
}
const mesh = new THREE.Mesh(geo, mat_array);
scene.add(mesh);
mesh.position.set(0,1.5,0)
mesh.castShadow= true
mesh.name = "dadu1"
const plane = new PlaneMesh(scene);
plane.plane_mesh.position.y = -0.5;

const geo2 = new THREE.BoxGeometry(3,3,3);  // bikin geo2metry box ukuran 1x1x1
const mat2 = new THREE.MeshPhongMaterial({map: map_saya, normalMap: map_normal, roughnessMap:map_rough, aoMap: map_ao}); // warna merah
const mesh2 = new THREE.Mesh(geo2, mat2);// bikin bendanya
scene.add(mesh2); // masukin boxnya ke dunia kita
mesh2.position.set(5,1,0)
mesh2.castShadow= true
mesh2.name = "dadu2"

const geo3 = new THREE.BoxGeometry(3,3,3);  // bikin geo3metry box ukuran 1x1x1
const mat3 = new THREE.MeshPhongMaterial({map: map_saya2, normalMap: map_normal2, roughnessMap:map_rough2, aoMap: map_ao2}); // warna merah
const mesh3 = new THREE.Mesh(geo3, mat3);// bikin bendanya
scene.add(mesh3); // masukin boxnya ke dunia kita
mesh3.position.set(-5,1,0)
mesh3.castShadow= true
mesh3.name = "dadu3"

window.addEventListener("resize", function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    cam.aspect = window.innerWidth / window.innerHeight;
    cam.updateProjectionMatrix();
});


const myLighting = new LightingHelper(scene)
const myKeyboard = new KeyboardHelpher(scene)

let gui = new dat.GUI();
myLighting.pointLight.position.set(0, 5, 0);
myLighting.pointLight.intensity = 50

//https://sbcode.net/threejs/lights/
const ambientFolder= gui.addFolder("AmbientLight");
ambientFolder.addColor(myLighting.ambientLight, "color")
ambientFolder.add(myLighting.ambientLight, "intensity", 0, 1).name("Intensity");

const pointFolder= gui.addFolder("PointLight");
pointFolder.addColor(myLighting.pointLight,"color")
pointFolder.add(myLighting.pointLight,"intensity",0,100).name("Intensity");
pointFolder.add(myLighting.pointLight, 'distance', 0, 100, 0.01)
pointFolder.add(myLighting.pointLight, 'decay', 0, 4, 0.1)
pointFolder.add(myLighting.pointLight.position,"x",-10,10).name("X");
pointFolder.add(myLighting.pointLight.position,"y",-10,10).name("Y");
pointFolder.add(myLighting.pointLight.position,"z",-10,10).name("Z");

let raycast = new THREE.Raycaster();
let mouse = {};
let selected;

let arrow = new THREE.ArrowHelper(raycast.ray.direction, cam.position, 10,0xff0000)
scene.add(arrow)

addEventListener("mousedown",(e)=>{
    mouse.x = (e.clientX/window.innerWidth)*2-1;
    mouse.y = (e.clientY/window.innerHeight)*-2+1;
    raycast.setFromCamera(mouse,cam)
    let items = raycast.intersectObjects(scene.children)
    arrow.setDirection(raycast.ray.direction)
    if (e.button === 0){
        items.forEach((i)=>{
            if(i.object.name != ""){
                console.log(i.object.name)
                selected=i.object
                // controls.target=selected.position;
            }
        })
    }else if (e.button === 2) {
        selected = undefined;
        console.log('Klik kanan ditekan');
      }
    
})

window.addEventListener("resize", ()=> {
    renderer.setSize(window.innerWidth,window.innerHeight);
    cam.aspect=window.innerWidth/window.innerHeight;
    cam.updateProjectionMatrix();
});

function prosesKeyboard(){
    const speed= 0.05
    if((myKeyboard.keys['a'] || myKeyboard.keys['A']) && selected.position.x>=-12.5 && selected!=undefined){
        selected.position.x-=speed;

    }if((myKeyboard.keys['d'] || myKeyboard.keys['D']) && selected.position.x<=12.5 && selected!=undefined){
        selected.position.x+=speed;

    }if((myKeyboard.keys['w'] || myKeyboard.keys['W']) && selected.position.z>=-12.5 && selected!=undefined){
        selected.position.z-=speed;

    }if((myKeyboard.keys['s'] || myKeyboard.keys['S'])  && selected.position.z<=12.5 && selected!=undefined){
        selected.position.z+=speed;

    }if((myKeyboard.keys['q'] || myKeyboard.keys['Q']) && selected.position.z>=-12.5 && selected!=undefined){
        selected.rotation.y-=Math.PI/2;

    }if((myKeyboard.keys['e'] || myKeyboard.keys['E'])  && selected.position.z<=12.5 && selected!=undefined){
        selected.rotation.y+=Math.PI/2;

    }

}

const controls = new PointerLockControls(cam, renderer.domElement);
//https://sbcode.net/threejs/pointerlock-controls/
const menuPanel = document.getElementById('menuPanel') 
const startButton = document.getElementById('startButton') 
startButton.addEventListener(
  'click',
  function () {
    controls.lock()
  },
  false
)

controls.addEventListener('lock', () => {
    menuPanel.style.display = 'none'
})

controls.addEventListener('unlock', () => {
    menuPanel.style.display = 'block'
})

const onKeyDown = function (event) {
    switch (event.code) {
      case 'KeyW':
        controls.moveForward(0.25)
        break
      case 'KeyA':
        controls.moveRight(-0.25)
        break
      case 'KeyS':
        controls.moveForward(-0.25)
        break
      case 'KeyD':
        controls.moveRight(0.25)
        break
    }
}

if(selected==undefined){
    document.addEventListener('keydown', onKeyDown, false)
}

function draw() {
    if(selected!=undefined){
        prosesKeyboard();
        
    }
    controls.update();
    renderer.render(scene,cam);;
    requestAnimationFrame(draw);
}
draw();