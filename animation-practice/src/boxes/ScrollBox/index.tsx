import { Box } from '@src/boxes/style';
import { useScroll, useTransform } from 'framer-motion';

const ScrollBox = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  console.log(scrollYProgress);

  return <Box style={{ scale }} />;
};

export default ScrollBox;
