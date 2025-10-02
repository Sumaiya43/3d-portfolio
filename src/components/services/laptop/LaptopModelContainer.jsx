import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { LaptopModel } from "./LaptopModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const LaptopModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="Loading......">
        <Stage environment="night" intensity={0.5}>
          <LaptopModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1,0,1.8]} zoom={0.8} makeDefault/>
      </Suspense>
    </Canvas>
  );
};

export default LaptopModelContainer;
