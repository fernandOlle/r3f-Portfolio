import { Canvas } from '@react-three/fiber';

import Loader from './components/loader';
import LinkBox from './components/linkBox';
import Items from './components/items';
import './styles.css';
import { state } from './components/util';
import { Suspense } from 'react';

function App() {
  const windowWidth = window.innerWidth <= 900 ? false : true;

  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 0, 5] }}
        dpr={[1, 1.5]}
        onPointerMissed={() => (state.clicked = null)}
      >
        <Suspense fallback={null}>
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
          <LinkBox />
          {windowWidth && <Items />}
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
//  <Items />
export default App;
