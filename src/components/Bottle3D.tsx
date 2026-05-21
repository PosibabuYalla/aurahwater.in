'use client'
import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, MeshTransmissionMaterial, RoundedBox, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

function BottleMesh({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null)
  const targetRot = useRef({ x: 0, y: 0 })

  useFrame((_, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.4
    targetRot.current.x = mouse.y * 0.3
    targetRot.current.y = mouse.x * 0.3
    groupRef.current.rotation.x += (targetRot.current.x - groupRef.current.rotation.x) * 0.05
  })

  return (
    <group ref={groupRef}>
      {/* Bottle body */}
      <Cylinder args={[0.38, 0.42, 2.2, 32]} position={[0, 0, 0]}>
        <MeshTransmissionMaterial
          backside
          samples={8}
          thickness={0.3}
          roughness={0.05}
          transmission={0.95}
          ior={1.5}
          chromaticAberration={0.06}
          color="#C8E8F5"
          attenuationColor="#89CCE8"
          attenuationDistance={0.5}
        />
      </Cylinder>
      {/* Neck */}
      <Cylinder args={[0.22, 0.36, 0.5, 32]} position={[0, 1.35, 0]}>
        <MeshTransmissionMaterial
          backside samples={4} thickness={0.2}
          roughness={0.05} transmission={0.95} ior={1.5}
          color="#C8E8F5"
        />
      </Cylinder>
      {/* Cap */}
      <Cylinder args={[0.24, 0.24, 0.3, 32]} position={[0, 1.75, 0]}>
        <meshStandardMaterial color="#D85A00" roughness={0.3} metalness={0.1} />
      </Cylinder>
      {/* Label band */}
      <Cylinder args={[0.44, 0.44, 0.9, 32]} position={[0, -0.1, 0]}>
        <meshStandardMaterial color="#1A1A1A" roughness={0.8} transparent opacity={0.85} />
      </Cylinder>
      {/* Water inside */}
      <Cylinder args={[0.34, 0.38, 1.8, 32]} position={[0, -0.1, 0]}>
        <meshStandardMaterial color="#89CCE8" transparent opacity={0.35} roughness={0} />
      </Cylinder>
    </group>
  )
}

export default function Bottle3D() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#FF9A4D" />
      <directionalLight position={[-5, -2, -5]} intensity={0.5} color="#C8E8F5" />
      <pointLight position={[0, 3, 2]} intensity={1} color="#FF7A1A" />
      <Environment preset="city" />
      <BottleMesh mouse={mouse} />
    </Canvas>
  )
}
