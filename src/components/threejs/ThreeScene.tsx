"use client";

import { useEffect, useRef } from "react";
import { usePathname } from 'next/navigation'
//@ts-expect-error: OrbitControls lacks Next.js types
import * as THREE from "three";
//@ts-expect-error: OrbitControls lacks Next.js types
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
//@ts-expect-error: OrbitControls lacks Next.js types
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import GUI from "lil-gui";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname()
  console.log(pathname)


  useEffect(() => {
   
    
    if (pathname == "/visualisation-3d") {document.body.style.overflow = "hidden";}

    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(10.525, 4, 6);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    // On ne définit plus la couleur ici, on le fera dynamiquement
    container.appendChild(renderer.domElement);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const controls = new OrbitControls(camera, renderer.domElement);
    
    // ... (votre code pour GUI et GLTFLoader reste identique) ...
    // ------------ GUI -----------------------------------------
    const gui = new GUI({ autoPlace: false });
    container.appendChild(gui.domElement);

    Object.assign(gui.domElement.style, {
        position: "absolute",
        top: "0",
        right: "0",
        zIndex: "10",
    });

    const params = {
      vitesse: 0.00,
      couleur: 0x6b6b6b,
      resetRotation: function() {
        modele.rotation.x = Math.PI / 2
        modele.rotation.z = Math.PI
          }
    };

    gui.add(params, "vitesse", 0, 0.03).name("Rotation");
    gui.addColor(params, "couleur").name("Couleur").onChange((value: any) => {
      if (modele) {
        modele.traverse((child: any) => {
          if (child.isMesh && child.material) {
            (child.material as THREE.MeshStandardMaterial).color.set(value);
            child.material.metalness = 0.7;
            child.material.roughness = 0.35;
          }
        });
      }
    });
    gui.add(params,  "resetRotation").name("Réinitialiser la rotation");
    //-----------------------------------------------------

    const loader = new GLTFLoader();
    let modele: THREE.Group | null;
    loader.load(
        '/swalle_conduit.glb', 
        function(gltf: any){
            modele = gltf.scene
            modele.scale.set(0.05, 0.05, 0.05)
            modele.position.set(0, 0, 0)
            modele.rotation.x = Math.PI / 2
            modele.rotation.z = Math.PI
            modele.traverse((child: any) => {
              if (child.isMesh && child.material) {
                child.material.color.set(0x6b6b6b);
                child.material.metalness = 0.7;
                child.material.roughness = 0.35;
              }
        });
            scene.add(modele)
        },
        function (xhr: any) {
            if (xhr.total && xhr.total > 0) {
                console.log(((xhr.loaded / xhr.total) * 100).toFixed(2) + "% loaded");
            } else {
                console.log(xhr.loaded/1000000 + " MB loaded");
            }
        },
        function(error: any){
            console.error('erreur lors du chargement du conduit de Swall-E')
        }
    )

    // --------------------     LIGHTS
    const ambient = new THREE.AmbientLight(0xffffff, 3);
    scene.add(ambient);

    const povLight = new THREE.PointLight(0xffffff, 500, 100000);
    povLight.position.set(0, 0, 0); // relative à la caméra
    camera.add(povLight);
    scene.add(camera);
    // AXES X Y Z ---------------------------------
    
    const axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper );

    // ➡️ Fonction pour créer un label
    function createLabel(text: string, color:THREE.ColorRepresentation) {
      const canvas = document.createElement('canvas');
      const size = 128; // taille de la texture
      canvas.width = size;
      canvas.height = size;

      const context = canvas.getContext('2d')!;
      context.font = '48px Arial';
      context.fillStyle = color;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(text, size / 2, size / 2);

      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
      const sprite = new THREE.Sprite(material);
      sprite.scale.set(0.5, 0.5, 0.5); // taille du label
      return sprite;
    }

    // ➡️ Labels pour chaque axe
    const labelX = createLabel('X', 'red');
    labelX.position.set(5.5, 0, 0);
    scene.add(labelX);

    const labelY = createLabel('Y', 'green');
    labelY.position.set(0, 5.5, 0);
    scene.add(labelY);

    const labelZ = createLabel('Z', 'blue');
    labelZ.position.set(0, 0, 5.5);
    scene.add(labelZ);


    // -------------

    const updateBackgroundColor = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      const lightColor = new THREE.Color(0xededed); 
      const darkColor = new THREE.Color(0x0f0f0f);  
      renderer.setClearColor(isDarkMode ? darkColor : lightColor);
    };

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          updateBackgroundColor();
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });

    // appel initial
    updateBackgroundColor();

    const animate = () => {
      if(modele){
        modele.rotation.z += params.vitesse
      }
      renderer.render(scene, camera);
    };
    renderer.setAnimationLoop(animate);

    return () => {
      observer.disconnect();
      gui.destroy();
      renderer.dispose();
      container.removeChild(renderer.domElement);
      document.body.style.overflow = "auto";
    };
  });

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
}