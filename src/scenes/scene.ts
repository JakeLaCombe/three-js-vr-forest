import * as THREE from 'three';
import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

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

        this.camera.position.z = 5;
    }

    animate() {
	    requestAnimationFrame( this.animate.bind(this) );

	    this.cube.rotation.x += 0.01;
	    this.cube.rotation.y += 0.01;

	    this.renderer.render( this.scene, this.camera );
    }
}



//animate();