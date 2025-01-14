import * as CANNON from 'cannon-es';
import * as THREE from 'three';

class PhysicsWorld {
    constructor() {
        // World Documentation: https://pmndrs.github.io/cannon-es/docs/classes/World.html
        this.world = new CANNON.World({
            // Vec3 Documentation: https://pmndrs.github.io/cannon-es/docs/classes/Vec3.html
            gravity: new CANNON.Vec3(0, -9.81, 0)
        });

        // Material Documentation: https://pmndrs.github.io/cannon-es/docs/classes/Material.html
        this.defaultMaterial = new CANNON.Material('default');
        this.floorMaterial = new CANNON.Material('floor');
        this.furnitureMaterial = new CANNON.Material('furniture');

        // ContactMaterial Documentation: https://pmndrs.github.io/cannon-es/docs/classes/ContactMaterial.html
        this.world.addContactMaterial(
            new CANNON.ContactMaterial(
                this.floorMaterial,
                this.furnitureMaterial,
                { friction: 0.5, restitution: 0.1 } 
            )
        );
        
        // Plane Documentation: https://pmndrs.github.io/cannon-es/docs/classes/Plane.html
        const groundShape = new CANNON.Plane();
        // Body Documentation: https://pmndrs.github.io/cannon-es/docs/classes/Body.html
        const groundBody = new CANNON.Body({
            mass: 0,
            material: this.floorMaterial,
            shape: groundShape,
            type: CANNON.Body.STATIC 
        });

        // Quaternion Documentation: https://pmndrs.github.io/cannon-es/docs/classes/Quaternion.html
        groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
        this.world.addBody(groundBody);

        this.physicsBodies = new Map();
        PhysicsWorld.instance = this;
    }

    // Box Documentation: https://pmndrs.github.io/cannon-es/docs/classes/Box.html
    addStaticObject({ mesh, size, center }) {
        const physicsShape = new CANNON.Box(new CANNON.Vec3(size.x / 2, size.y / 2, size.z / 2));
        const body = new CANNON.Body({
            mass: 0,
            material: this.floorMaterial,
            position: new CANNON.Vec3(center.x, center.y-3.5, center.z),
        });
    
        body.addShape(physicsShape);
        body.quaternion.copy(mesh.quaternion);
        this.world.addBody(body);
        this.physicsBodies.set(mesh, body);
    }
    
    // Box3 Documentation: https://threejs.org/docs/#api/en/math/Box3
    // Vector3 Documentation: https://threejs.org/docs/#api/en/math/Vector3
    addFurnitureBody(mesh, options = {}) {
        const {
            mass = 1,
            shape = 'box',
            // Damping Documentation: https://pmndrs.github.io/cannon-es/docs/classes/Body.html#linearDamping
            linearDamping = 0.4,
            angularDamping = 0.4
        } = options;

        const bbox = new THREE.Box3().setFromObject(mesh);
        const size = bbox.getSize(new THREE.Vector3());
        size.multiply(mesh.scale);

        // Sphere Documentation: https://pmndrs.github.io/cannon-es/docs/classes/Sphere.html
        const physicsShape = shape === 'sphere' 
            ? new CANNON.Sphere(size.x / 2) 
            : new CANNON.Box(new CANNON.Vec3(size.x / 2, size.y / 2, size.z / 2));

        const body = new CANNON.Body({
            mass,
            material: this.furnitureMaterial,
            shape: physicsShape,
            position: new CANNON.Vec3(mesh.position.x, mesh.position.y, mesh.position.z),
            linearDamping,
            angularDamping,
            allowSleep: false,
            sleepSpeedLimit: 0.1,
            sleepTimeLimit: 0.1
        });

        body.quaternion.copy(mesh.quaternion);
        this.world.addBody(body);
        this.physicsBodies.set(mesh, body);
        return body;
    }

    // World Step Documentation: https://pmndrs.github.io/cannon-es/docs/classes/World.html#step
    update(deltaTime) {
        const fixedTimeStep = 1 / 60;
        this.world.step(fixedTimeStep, deltaTime, 10);

        this.physicsBodies.forEach((body, mesh) => {
            if (!body.isSleeping) {
                mesh.position.copy(body.position);
                mesh.quaternion.copy(body.quaternion);
            }
        });
    }

    removeBody(mesh) {
        const body = this.physicsBodies.get(mesh);
        if (body) {
            this.world.removeBody(body);
            this.physicsBodies.delete(mesh);
        }
    }

    clearAllBodies() {
        this.physicsBodies.forEach((body) => this.world.removeBody(body));
        this.physicsBodies.clear();
    }
}

export const physicsWorld = new PhysicsWorld();