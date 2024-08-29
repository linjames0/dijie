"use client";

import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { useEffect } from 'react';

import * as THREE from 'three';

export default function Model( { objPath, mtlPath }) {
    const obj = useRef();

    // load obj and mtl files
    const materials = useLoader(MTLLoader, mtlPath);
    const model = useLoader(OBJLoader, objPath, (loader) => {
        materials.preload();
        loader.setMaterials(materials)
    });

    if (model instanceof THREE.Object3D) {
        console.log('model is an instance of THREE.Object3D');
    }    

    // useEffect(() => {
    //     if (obj.current) {
    //         obj.current.traverse((child) => {
    //             if (child.isMesh) {
    //                 child.castShadow = true;
    //                 child.receiveShadow = true;
    //             }
    //         });
    //     }
    // }, [model]);
    
    return <primitive ref={obj} object={model} />;
}