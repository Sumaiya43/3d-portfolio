import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MugModel } from "./MugModel";

const MugModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="Loading......">
        <Stage environment="night" intensity={5}>
          <MugModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[2,2,0]} zoom={0.5} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default MugModelContainer;
