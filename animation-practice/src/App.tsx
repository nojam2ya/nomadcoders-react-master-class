import { gradientState } from '@src/atoms';
import AnimationBox from '@src/boxes/AnimationBox';
import DragBox from '@src/boxes/DragBox';
import GesturesBox from '@src/boxes/GesturesBox';
import MotionValueBox from '@src/boxes/MotionValueBox';
import SVGAnimationBox from '@src/boxes/SVGAnimationBox';
import ScrollBox from '@src/boxes/ScrollBox';
import VariantsBox from '@src/boxes/VariantsBox';
import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

const Wrap = styled(motion.div)`
  width: 100vw;
  /* height: 200vh; */
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-90deg, #1ed7b5, #f0f9a7);
`;

function App() {
  const gradient = useRecoilValue(gradientState);

  return (
    <Wrap style={{ background: gradient }}>
      <AnimationBox />
      <VariantsBox />
      <GesturesBox />
      <MotionValueBox />
      <DragBox />
      <ScrollBox />
      <SVGAnimationBox />
    </Wrap>
  );
}

export default App;
