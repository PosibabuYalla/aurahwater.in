'use client'
import { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

useGLTF.preload('/models/Aurahwaterbottle3dl.glb')

function BottleModel({ mouse }: { mouse: { x: number; y: number } }) {
  const { scene } = useGLTF('/models/Aurahwaterbottle3dl.glb')
  const groupRef = useRef<THREE.Group>(null)

  // Clone scene so multiple instances don't share state
  const cloned = scene.clone()

  useFrame((_, delta) => {
    if (!groupRef.current) return
    // Auto rotate
    groupRef.current.rotation.y += delta * 0.4
    // Mouse parallax tilt
    groupRef.current.rotation.x += (mouse.y * 0.25 - groupRef.current.rotation.x) * 0.05
  })

  return (
    <group ref={groupRef}>
      <primitive object={cloned} />
    </group>
  )
}

function Loader() {
  return (
    <mesh>
      <cylinderGeometry args={[0.3, 0.35, 2, 16]} />
      <meshStandardMaterial color="#C8E8F5" transparent opacity={0.4} />
    </mesh>
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
    <Canvas
      camera={{ position: [0, 0, 2], fov: 40 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 8, 5]} intensity={2} color="#FFF5EE" />
      <directionalLight position={[-4, -2, -4]} intensity={0.6} color="#C8E8F5" />
      <pointLight position={[2, 4, 3]} intensity={1.2} color="#FF9A4D" />
      <pointLight position={[-2, -2, 2]} intensity={0.5} color="#89CCE8" />
      <Environment preset="studio" />
      <Suspense fallback={<Loader />}>
        <BottleModel mouse={mouse} />
      </Suspense>
    </Canvas>
  )
}
