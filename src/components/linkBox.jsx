import * as THREE from 'three';
import { useLoader, useThree } from '@react-three/fiber';
import { useGesture } from '@use-gesture/react';
import { useSpring, a } from '@react-spring/three';

const LinkBox = () => {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const [spring, set] = useSpring(() => ({
    scale: [1, 1, 1],
    position: [-1, 1, 0.5],
    rotation: [0, 0, 0],
    config: { friction: 10 },
  }));

  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      set({
        position: [x / aspect, -y / aspect, 0.5],
        rotation: [y / aspect, x / aspect, 0],
      });
    },
    onHover: ({ hovering }) => {
      set({ scale: hovering ? [1.15, 1.15, 1.15] : [1, 1, 1] });
    },
  });

  const linkedin = useLoader(THREE.TextureLoader, '/linkedin.png');
  const github = useLoader(THREE.TextureLoader, '/github.png');
  const twitter = useLoader(THREE.TextureLoader, '/twitter.png');

  const redirect = (e) => {
    switch (Math.floor(e.faceIndex / 2)) {
      case 0:
      case 1:
        window.open('https://www.linkedin.com/in/fernandolle/', '_self');
        break;
      case 2:
      case 3:
        window.open('https://twitter.com/JsGists', '_self');
        break;
      case 4:
      case 5:
        window.open('https://github.com/fernandOlle', '_self');
        break;
      default:
        break;
    }
  };

  return (
    <a.mesh
      {...spring}
      {...bind()}
      onDoubleClick={(e) => {
        redirect(e);
      }}
      castShadow
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={linkedin} attachArray='material' />
      <meshStandardMaterial map={linkedin} attachArray='material' />
      <meshStandardMaterial map={twitter} attachArray='material' />
      <meshStandardMaterial map={twitter} attachArray='material' />
      <meshStandardMaterial map={github} attachArray='material' />
      <meshStandardMaterial map={github} attachArray='material' />
    </a.mesh>
  );
};

export default LinkBox;
