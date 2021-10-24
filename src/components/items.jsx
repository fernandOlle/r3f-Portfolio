import { useThree } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import Item from './item';
import { Minimap } from './minimap';
import { state } from '../utils';

const Items = ({ w = 0.7, gap = 0.15 }) => {
  const { urls } = useSnapshot(state);
  const { width } = useThree((state) => state.viewport);
  const xW = w + gap;
  return (
    <ScrollControls
      horizontal
      damping={3}
      pages={(width - xW + urls.length * xW) / width}
    >
      <Minimap />
      <Scroll>
        {
          urls.map((url, i) => <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} url={url} />) /* prettier-ignore */
        }
      </Scroll>
    </ScrollControls>
  );
};

export default Items;
