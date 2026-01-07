import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, MeshDistortMaterial, Environment, Float } from '@react-three/drei';

const AnimatedShape = () => {
    const meshRef = useRef(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const { clock, mouse } = state;

        // Gentle rotation
        meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;

        // Mouse influence
        const x = (mouse.x * window.innerWidth) / 500;
        const y = (mouse.y * window.innerHeight) / 500;

        meshRef.current.rotation.x += y * 0.1;
        meshRef.current.rotation.y += x * 0.1;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} scale={2}>
                <icosahedronGeometry args={[1, 32]} />
                <MeshDistortMaterial
                    color="#1a1a1a"
                    emissive="#ccff00"
                    emissiveIntensity={0.2}
                    wireframe={true}
                    distort={0.4}
                    speed={2}
                    roughness={0}
                    metalness={1}
                />
            </mesh>
            {/* Inner glow shape */}
            <mesh scale={1.8}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshBasicMaterial color="#ccff00" transparent opacity={0.05} />
            </mesh>
        </Float>
    );
};

const ThreeScene = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <Environment preset="city" />
                <ambientLight intensity={0.5} />
                <AnimatedShape />
            </Canvas>
        </div>
    );
};

export default ThreeScene;
