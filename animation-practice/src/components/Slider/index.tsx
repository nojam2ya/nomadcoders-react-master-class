import { AnimatePresence } from 'framer-motion';
import { Box, Wrap } from './style';
import { useState } from 'react';

const slideVars = {
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    tansition: {
      duration: 1,
    },
  }),
};

const Slider = () => {
  const [visible, setVisble] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setVisble((prev) => (prev === 10 ? 1 : prev + 1));
    setBack(false);
  };
  const prevPlease = () => {
    setVisble((prev) => (prev === 1 ? 10 : prev - 1));
    setBack(true);
  };
  return (
    <Wrap>
      <div className="flex-box">
        <AnimatePresence>
          <Box
            key={visible}
            custom={back}
            variants={slideVars}
            initial="entry"
            animate="center"
            exit="exit"
          >
            {visible}
          </Box>
        </AnimatePresence>
      </div>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
    </Wrap>
  );
};

export default Slider;
