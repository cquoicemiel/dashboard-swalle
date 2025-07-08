import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.20/+esm';


const canva = document.getElementById('3d-container');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canva.clientWidth / canva.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(canva.clientWidth, canva.clientHeight);
renderer.setClearColor(0xffffff)
canva.appendChild(renderer.domElement)

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const cube = new THREE.Mesh(geometry, material);
scene.add(cube)


const geometry2 = new THREE.IcosahedronGeometry(1, 2)
const material2 = new THREE.LineDashedMaterial({color: 0x000000})
const icosahedron = new THREE.Mesh(geometry2, material2)
scene.add(icosahedron)
icosahedron.position.x += 1.5

const geometry3 = new THREE.TorusKnotGeometry( 1, 0.4, 64, 8 ); 
const material3 = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
const torusknot = new THREE.Mesh(geometry3, material3)
scene.add(torusknot)
torusknot.position.x -= 1.5


camera.position.z = 2.5

const gui = new GUI({autoPlace: false});
canva.appendChild(gui.domElement)
const params = {
    vitesse: 0.01,
    couleur: 0xff0000
}

gui.add(params, 'vitesse', 0, 0.1).name('Vitesse');
gui.addColor(params, 'couleur').name('Couleur');

function animate(){
    cube.rotation.x += params.vitesse
    cube.rotation.y += params.vitesse
    icosahedron.rotation.x += params.vitesse
    icosahedron.rotation.y += params.vitesse
    torusknot.rotation.x += params.vitesse
    torusknot.rotation.y += params.vitesse
    material.color.set(params.couleur)
    renderer.render(scene, camera)
}
renderer.setAnimationLoop(animate)
