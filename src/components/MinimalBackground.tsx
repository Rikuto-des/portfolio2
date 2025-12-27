import { useRef, memo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

const FloatingNetwork = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 40;

  // ランダムな位置と回転データを生成
  const dummy = new THREE.Object3D();
  const particles = Array.from({ length: count }, () => ({
    position: [
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 10
    ],
    rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
    scale: Math.random() * 0.5 + 0.2
  }));

  useFrame((state) => {
    if (!meshRef.current) return;

    // アニメーション
    const time = state.clock.getElapsedTime();

    particles.forEach((particle, i) => {
      const { position, rotation, scale } = particle;

      // ゆったりとした浮遊動作
      dummy.position.set(
        position[0] + Math.sin(time * 0.1 + i) * 1,
        position[1] + Math.cos(time * 0.2 + i) * 1,
        position[2]
      );

      dummy.rotation.set(
        rotation[0] + time * 0.1,
        rotation[1] + time * 0.1,
        rotation[2]
      );

      dummy.scale.setScalar(scale);
      dummy.updateMatrix();

      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <icosahedronGeometry args={[0.5, 0]} />
      <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.15} />
    </instancedMesh>
  );
};

const MouseRig = () => {
  useFrame((state) => {
    // マウス位置に応じたカメラの緩やかな移動
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.5, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 0.5, 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

const MinimalScene = () => {
  return (
    <>
      <color attach="background" args={['#030303']} />

      <MouseRig />

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <FloatingNetwork />
      </Float>

      <Sparkles
        count={80}
        scale={12}
        size={2}
        speed={0.4}
        opacity={0.4}
        color="#ffffff"
      />

      <EffectComposer disableNormalPass>
        <Bloom
          luminanceThreshold={0.2}
          mipmapBlur
          intensity={1.2}
          radius={0.8}
        />
        <Noise opacity={0.03} />
        <Vignette eskil={false} offset={0.1} darkness={0.6} />
      </EffectComposer>
    </>
  );
};

export const MinimalBackground = memo(() => {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          toneMapping: THREE.ReinhardToneMapping,
          toneMappingExposure: 1.5
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <MinimalScene />
      </Canvas>
      {/* オーバーレイグラデーションで奥行き感を強調 */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/80 pointer-events-none" />
    </div>
  );
});
