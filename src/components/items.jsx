import { useThree } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';

import Item from './item';
import { useSnapshot } from 'valtio';
import { Minimap } from './minimap';
import { state } from './util';

function Items({ w = 0.7, gap = 0.15 }) {
  const { urls } = useSnapshot(state);
  const { width } = useThree((state) => state.viewport);
  const xW = w + gap;
  return (
    <ScrollControls
      horizontal
      damping={6}
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
}
//clickDisabled={scrollProps.dragging}
export default Items;
