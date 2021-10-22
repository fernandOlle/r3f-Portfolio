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

  return (
    <a.mesh {...spring} {...bind()} castShadow>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshStandardMaterial map={twitter} attachArray='material' />
      <meshStandardMaterial map={linkedin} attachArray='material' />
      <meshStandardMaterial
        map={github}
        attachArray='material'
        onDoubleClick={() => {
          window.open('http://github.com', '_blank');
        }}
      />
      <meshStandardMaterial map={linkedin} attachArray='material' />
      <meshStandardMaterial map={github} attachArray='material' />
      <meshStandardMaterial map={twitter} attachArray='material' />
    </a.mesh>
  );
};

export default LinkBox;
