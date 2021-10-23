import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';

import Carousel from './components/carousel';
import LinkBox from './components/linkBox';
import './index.css';

function App() {
  return (
    <>
      <Canvas shadowMap camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.5}
          position={[20, 10, 10]}
          angle={0.2}
          penumbra={1}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          castShadow
        />
        <mesh receiveShadow>
          <planeBufferGeometry args={[100, 100]} />
          <meshPhongMaterial color='#121214' />
        </mesh>

        <Suspense fallback={null}>
          <LinkBox position={[0, 0, 999]} zIndexRange={[1000, 101]} />
        </Suspense>

        <Html fullscreen position={[0, 0, 0]} zIndexRange={[100, 0]}>
          <Carousel position={[0, 0, 0]} zIndexRange={[100, 0]} />
        </Html>
      </Canvas>
    </>
  );
}
// zIndexRange={[1000, 0]}
export default App;
