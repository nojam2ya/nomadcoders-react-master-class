import { Box } from '@components/Boxes/style';

const rotateSpringVars = {
  start: { scale: 0, rotate: 180 },
  end: {
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', delay: 0.4, stiffness: 260, damping: 20 },
  },
};

const AnimationBox = () => {
  return <Box variants={rotateSpringVars} initial="start" animate="end" />;
};

export default AnimationBox;
