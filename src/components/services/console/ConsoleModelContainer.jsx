import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { ConsoleModel } from "./ConsoleModel";
import { Canvas } from "@react-three/fiber";

const ConsoleModelContainer = () => {
  return (
      <Canvas>
         <Suspense fallback="Loading......">
           <Stage environment="night" intensity={0.5}>
             <ConsoleModel/>
           </Stage>
           <OrbitControls enableZoom={false} autoRotate />
           <PerspectiveCamera position={[-1,0,1.8]} zoom={0.5} makeDefault/>
         </Suspense>
       </Canvas>
  )
}

export default ConsoleModelContainer