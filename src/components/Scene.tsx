import { Html, OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Color, DirectionalLight, Vector3 } from "three";
import { OrbitControls as OrbitControlsType } from "three-stdlib";
import { useSceneStore } from "../state/Scene";
import { projects } from "../data/projects";
import Globe from "./Globe.glb.animated";
import GlobeAlternate from "./GlobeAlternate";

function latLngToVector3(lat: number, lng: number, radius = 1.25) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    return new Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

function ProjectPin({ project }: { project: any }) {
    const [hovered, setHovered] = useState(false);
    const position = latLngToVector3(project.lat, project.lng);

    return (
        <group position={position}>
            <mesh
                onPointerOver={(e) => {
                    e.stopPropagation();
                    setHovered(true);
                    document.body.style.cursor = "pointer";
                }}
                onPointerOut={(e) => {
                    e.stopPropagation();
                    setHovered(false);
                    document.body.style.cursor = "default";
                }}
            >
                <sphereGeometry args={[0.04, 24, 24]} />
                <meshStandardMaterial
                    color="#d6af4b"
                    emissive="#d6af4b"
                    emissiveIntensity={3}
                />
            </mesh>

            {hovered && (
                <Html center distanceFactor={8}>
                    <div
                        style={{
                            background: "rgba(0,0,0,0.8)",
                            color: "#d6af4b",
                            padding: "6px 10px",
                            borderRadius: "999px",
                            fontSize: "12px",
                            fontWeight: 700,
                            whiteSpace: "nowrap",
                            border: "1px solid rgba(214,175,75,0.5)",
                            pointerEvents: "none"
                        }}
                    >
                        {project.name}
                    </div>
                </Html>
            )}
        </group>
    );
}

export default function Scene() {
    const { camera, gl, invalidate, scene } = useThree();

    const animate = useSceneStore((state) => state.animate);
    const autoRotate = useSceneStore((state) => state.autoRotate);
    const backgroundColor = useSceneStore((state) => state.backgroundColor);
    const landColor = useSceneStore((state) => state.landColor);
    const waterColor = useSceneStore((state) => state.waterColor);
    const blendFactor = useSceneStore((state) => state.blendFactor);
    const scaleFactor = useSceneStore((state) => state.scaleFactor);
    const opacity = useSceneStore((state) => state.opacity);
    const bloomRadius = useSceneStore((state) => state.bloomRadius);
    const bloomStrength = useSceneStore((state) => state.bloomStrength);
    const bloomThreshold = useSceneStore((state) => state.bloomThreshold);
    const lightColor = useSceneStore((state) => state.lightColor);
    const lightIntensity = useSceneStore((state) => state.lightIntensity);
    const toneMappingExposure = useSceneStore(
        (state) => state.toneMappingExposure
    );

    const controlsRef = useRef<OrbitControlsType>(null);
    const colorRef = useRef(new Color(backgroundColor));
    const lightRef = useRef<DirectionalLight | null>(null);

    if (!lightRef.current) {
        const light = new DirectionalLight("#ffffff", 0.6);
        light.position.set(0, -6, -3);
        lightRef.current = light;
    }

    useEffect(() => {
        const light = lightRef.current!;
        camera.add(light);
        scene.add(camera);

        return () => {
            camera.remove(light);
            scene.remove(camera);
        };
    }, [camera, scene]);

    useEffect(() => {
        colorRef.current.set(backgroundColor);
        scene.background = colorRef.current;
    }, [backgroundColor, scene]);

    useEffect(() => {
        if (lightRef.current) {
            lightRef.current.color.set(lightColor);
        }
    }, [lightColor]);

    useEffect(() => {
        if (lightRef.current) {
            lightRef.current.intensity = lightIntensity;
        }
    }, [lightIntensity]);

    useEffect(() => {
        gl.toneMappingExposure = toneMappingExposure;
    }, [gl, toneMappingExposure]);

    useEffect(() => {
        invalidate();
    }, [
        animate,
        autoRotate,
        backgroundColor,
        landColor,
        waterColor,
        blendFactor,
        scaleFactor,
        opacity,
        bloomRadius,
        bloomStrength,
        bloomThreshold,
        lightColor,
        lightIntensity,
        toneMappingExposure,
        invalidate
    ]);

    useFrame(() => {
        if (autoRotate && controlsRef.current) {
            controlsRef.current.update();
            invalidate();
        } else if (animate) {
            invalidate();
        }
    });

    return (
        <>
            <ambientLight intensity={lightIntensity / 2} />

            <directionalLight
                position={[1.2, 0, 0.66]}
                color={lightColor}
                intensity={lightIntensity}
            />

            {import.meta.env.VITE_USE_ALTERNATE === "1" ? (
                <GlobeAlternate />
            ) : (
                <Globe />
            )}

            {projects.map((project) => (
                <ProjectPin key={project.id} project={project} />
            ))}

            <OrbitControls
                autoRotate={autoRotate}
                autoRotateSpeed={0.3}
                dampingFactor={0.03}
                enablePan={false}
                ref={controlsRef}
                zoomSpeed={0.3}
            />
        </>
    );
}