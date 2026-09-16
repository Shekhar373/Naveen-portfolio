"use client"
import React from 'react'
import { Canvas } from "@react-three/fiber"
import Spiral from '../r3f/Spiral'
// import { OrbitControls } from '@react-three/drei'

const ThreeCanvas = () => {
  return (
    <div className='h-screen w-full'>
        <Canvas>
          {/* <OrbitControls enableZoom={false} /> */}
           <Spiral />
        </Canvas>
    </div>
  )
}

export default ThreeCanvas