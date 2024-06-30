import { gradientState } from '@src/atoms';
import { Box } from '@src/boxes/style';
import { useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const MotionValueBox = () => {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      'linear-gradient(-90deg, #FF8989, #A9FF68)',
      'linear-gradient(-90deg, #1ed7b5, #f0f9a7)',
      'linear-gradient(-90deg, #E761BD, #83F5E5)',
    ],
  );
  const setGradient = useSetRecoilState(gradientState);

  useEffect(() => {
    // setGradient(gradient);
    gradient.onChange(() => {
      setGradient(gradient.get());
    });
  }, [gradient, setGradient]);

  return <Box style={{ x, rotateZ }} drag="x" dragSnapToOrigin />;
};

export default MotionValueBox;
