import * as THREE from "three";

export function createCrosshair(cam) {
    const material = new THREE.LineBasicMaterial({ //https://threejs.org/docs/index.html?q=line#api/en/materials/LineBasicMaterial
        color: 0xff0000,
        linewidth: 1,
        linecap: 'round', 
        linejoin: 'round',         
        transparent: true,
        opacity: 1,
    });
    const horizontalGeo = new THREE.BufferGeometry();
    const horizontalPoints = new Float32Array([
        -0.01, 0.0, -1.0,  
        0.01, 0.0, -1.0
    ]);
    horizontalGeo.setAttribute(
        "position",
        new THREE.BufferAttribute(horizontalPoints, 3)
    );
    const horizontalLine = new THREE.Line(horizontalGeo, material);
    const verticalGeo = new THREE.BufferGeometry();
    const verticalPoints = new Float32Array([
        0.0, -0.01, -1.0, 
        0.0,0.01, -1.0, 
    ]);

    verticalGeo.setAttribute("position",new THREE.BufferAttribute(verticalPoints, 3));
    const verticalLine = new THREE.Line(verticalGeo, material);

    const crosshair = new THREE.Group();
    crosshair.add(horizontalLine);
    crosshair.add(verticalLine);
    cam.add(crosshair);
    return crosshair;
}