import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Box, Wrap } from './style';

const popVars = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 10,
  },
};

const PopContainer = () => {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  return (
    <Wrap>
      <AnimatePresence>
        {showing && (
          <Box
            variants={popVars}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        )}
      </AnimatePresence>
      <button onClick={toggleShowing}>toggle popup</button>
    </Wrap>
  );
};

export default PopContainer;
