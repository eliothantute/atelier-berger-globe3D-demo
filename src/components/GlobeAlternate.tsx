import { useGLTF, useTexture } from "@react-three/drei";
import { DoubleSide, Mesh } from "three";

export default function GlobeAlternate() {
    const { nodes } = useGLTF(`${import.meta.env.BASE_URL}/globe.glb`);
    // use the existing atelier texture if available for a rich material
    const texture = useTexture(`${import.meta.env.BASE_URL}globe_atelier_materials.png`);

    const sphereGeom = (nodes.GlobeSphere as Mesh).geometry;

    return (
        <>
            <mesh geometry={sphereGeom} rotation={[0, 3.45, 0]}>
                <meshStandardMaterial
                    map={texture}
                    side={DoubleSide}
                    roughness={0.22}
                    metalness={0.7}
                    color="#f6f0e4"
                />
            </mesh>

            {/* Subtle gold wireframe overlay for a luxurious accent */}
            <mesh geometry={sphereGeom} rotation={[0, 3.45, 0]} scale={[1.002, 1.002, 1.002]}>
                <meshStandardMaterial
                    wireframe={true}
                    color="#d6af4b"
                    transparent={true}
                    opacity={0.12}
                />
            </mesh>
        </>
    );
}
