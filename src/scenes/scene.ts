import * as THREE from 'three';
import { AmbientLight, BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Forest from '@/blender/forest.glb'

export class GameScene {
    private geometry: BoxGeometry;
    private camera: PerspectiveCamera;
    private scene: Scene;
    private material: MeshBasicMaterial;
    private cube: Mesh;
    private renderer: WebGLRenderer;

    constructor(canvas: HTMLCanvasElement)
    {
        this.scene = new Scene();
        this.camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        this.renderer = new WebGLRenderer({ canvas });
        this.renderer.setSize( window.innerWidth, window.innerHeight );

        this.geometry = new BoxGeometry( 1, 1, 1 );
        this.material = new MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new Mesh( this.geometry, this.material );
        this.scene.add( this.cube );

        const loader = new GLTFLoader();
        loader.load(Forest, ( gltf: GLTF ) => {

            this.scene.add( gltf.scene );
    
            gltf.animations; // Array<THREE.AnimationClip>
            gltf.scene; // THREE.Group
            gltf.scenes; // Array<THREE.Group>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object
    
        })

        this.camera.position.z = 5;

        const light = new AmbientLight( 0x404040, 5 ); // soft white light
        this.scene.add( light );
    }

    animate() {
	    requestAnimationFrame( this.animate.bind(this) );

	    this.cube.rotation.x += 0.01;
	    this.cube.rotation.y += 0.01;

	    this.renderer.render( this.scene, this.camera );
    }
}



//animate();