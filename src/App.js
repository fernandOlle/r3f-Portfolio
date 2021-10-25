import { Canvas } from '@react-three/fiber';

import LinkBox from './components/linkBox';
import Items from './components/items';
import './styles.css';
import { state } from './components/util';

function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5] }}
      dpr={[1, 1.5]}
      onPointerMissed={() => (state.clicked = null)}
    >
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={0.6}
        position={[20, 10, 10]}
        angle={0.2}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />

      <mesh receiveShadow>
        <planeBufferGeometry args={[1000, 1000]} />
        <meshPhongMaterial color='#272727' />
      </mesh>
      <Items style={{ touchAction: 'none' }} />
      <LinkBox />
    </Canvas>
  );
}
//  <Items />
export default App;
