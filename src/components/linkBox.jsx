import * as THREE from 'three';
import { useLoader, useThree } from '@react-three/fiber';
import { useGesture } from 'react-use-gesture';
import { useSpring, a } from '@react-spring/three';

const LinkBox = () => {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const [spring, set] = useSpring(() => ({
    scale: [1, 1, 1],
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    config: { friction: 10 },
  }));
  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) =>
      set({
        position: [x / aspect, -y / aspect, 1],
        rotation: [y / aspect, x / aspect, 0],
      }),
    onHover: ({ hovering }) =>
      set({ scale: hovering ? [1.2, 1.2, 1.2] : [1, 1, 1] }),
  });

  const linkedin = useLoader(THREE.TextureLoader, '/linkedinF.png');
  const github = useLoader(THREE.TextureLoader, '/githubF.png');
  const twitter = useLoader(THREE.TextureLoader, '/twitterF.png');

  const redirect = (e) => {
    switch (Math.floor(e.faceIndex / 2)) {
      case 0:
      case 5:
        window.open('https://twitter.com/JsGists', '_blank');
        break;
      case 1:
      case 3:
        window.open('https://www.linkedin.com/in/fernandolle/', '_blank');
        break;
      case 2:
      case 4:
        window.open('https://github.com/fernandOlle', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <a.mesh
      {...spring}
      {...bind()}
      castShadow
      onDoubleClick={(e) => {
        redirect(e);
      }}
    >
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshStandardMaterial map={twitter} attachArray='material' />
      <meshStandardMaterial map={linkedin} attachArray='material' />
      <meshStandardMaterial map={github} attachArray='material' />
      <meshStandardMaterial map={linkedin} attachArray='material' />
      <meshStandardMaterial map={github} attachArray='material' />
      <meshStandardMaterial map={twitter} attachArray='material' />
    </a.mesh>
  );
};

export default LinkBox;
