/*
IMPORTANT

Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 crown.glb --transform 
Files: crown.glb [9.88MB] > C:\Users\DELL\Downloads\crown-transformed.glb [518.96KB] (95%)
*/

// import { Canvas } from "@react-three/fiber";
// import React, { useRef } from 'react'
// import { useGLTF , useAnimations} from '@react-three/drei'
// import {Center, OrbitControls, AccumulativeShadows, RandomizedLight, MeshRefractionMaterial, useEnvironment, Environment } from '@react-three/drei'
// import './styles.css'
// import { useThree } from '@react-three/fiber'


// function foo(){
//   const state = useThree()
//   const group = useRef()
//   const {animations } = useGLTF('/crown-transformed.glb')
//   const { actions } = useAnimations(animations, group);
// }

// export function Crown(props) {

//   // const group = useRef()
//   // const { animations } = useGLTF('/crown-transformed.glb')

//   const cubeRef = useRef();

//   // useEffect(() => {
//   //   console.log('animations', actions,animations);
//   // }, []);

//   // useFrame((state, delta) => {
//   //   cubeRef.current.rotation.z += 0.002;
//   // });

//   const { nodes, materials } = useGLTF('/crown-transformed.glb')
//   return (
//     <div className="loaderpage">
//       <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [-5, 5, 12], fov: 20 }} style={{height:"100vh"}}>
//         <foo />
//         <ambientLight intensity={30} color={0xffffff} castShadow />
//         <directionalLight intensity={10} position={[0, 0, 5]} color="white" />
//         <directionalLight intensity={10} position={[0, 0, -5]} color="white" />

//         <group {...props} dispose={null}>
//           <mesh rotation-z={1} geometry={nodes.ironCrown001.geometry} ref={cubeRef} material={materials['None.001']} rotation={[Math.PI / 2, 0, 0]} />
//         </group>
//         <OrbitControls enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} />
//       </Canvas>
//     </div>
//   )
// }

// useGLTF.preload('/crown-transformed.glb')


// import React, { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';

// function RotatingModel() {
//   const group = useRef();
//   const { nodes } = useGLTF('/crown-transformed.gltf');

//   useFrame((state, delta) => {
//     // Update rotation here based on your requirements
//     group.current.rotation.y += 0.002; // Adjust the rotation speed as needed
//   });

//   return (
//     <group ref={group}>
//       <mesh geometry={nodes.ironCrown001.geometry} material={materials['None.001']} />
//     </group>
//   );
// }

// export default function Crown() {
//   return (
//     <div style={{ width: '100%', height: '100vh' }}>
//       {/* Your other R3F setup */}
//       <RotatingModel />
//     </div>
//   );
// }
"use client"
import React, { useRef, useState } from 'react';
import { Text3D, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import dynamic from 'next/dynamic'
import './Crown.css';
import Countdown from '../countdown/Countdown';

function RotatingModel({ nodes }) {
  const group = useRef();

  useFrame((state, delta) => {
    // Update rotation here based on your requirements
    // group.current.rotation.x += 0.03;
    group.current.rotation.z += 0.018;
    // group.current.rotation.z += 0.002;

    // Adjust the rotation speed as needed
  });

  const { materials } = useGLTF('/loader/crown.glb');
  return (
    <group ref={group}>
      <mesh geometry={nodes.ironCrown001.geometry} material={materials['None.001']} rotation={[ 0, 0, 0]} />
    </group>
  );
}

export default function Crown() {
  const { nodes, material } = useGLTF('/loader/crown.glb');

  return (
    <div style={{ width: '100%', height: '100vh' }} className='loaderpage'>
      <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, -25, -15], fov: 30 }} style={{height:"100vh"}}>
        <directionalLight intensity={15} position={[0, 0, 2]} color="white" />
        <directionalLight intensity={15} position={[0, 0, -2]} color="white" />
        <directionalLight intensity={15} position={[4, 4, 0]} color="golden" />
        <RotatingModel nodes={nodes} />
      </Canvas>
          <div className='countdown'>
            <Countdown />
          </div>      
    </div>
  );
}


useGLTF.preload('/crown-transformed.glb')