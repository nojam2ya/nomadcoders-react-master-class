import AnimationBox from './AnimationBox';
import VariantsBox from './VariantsBox';
import GesturesBox from './GesturesBox';
import MotionValueBox from './MotionValueBox';
import DragBox from './DragBox';
import ScrollBox from './ScrollBox';
import SVGAnimationBox from './SVGAnimationBox';

const Boxes = () => {
  return (
    <>
      <AnimationBox />
      <VariantsBox />
      <GesturesBox />
      <MotionValueBox />
      <DragBox />
      <ScrollBox />
      <SVGAnimationBox />
    </>
  );
};

export default Boxes;
