import { useState } from 'react';
import { Box, Circle } from './style';

const LayoutAnimation = () => {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <div onClick={toggleClicked}>
      <Box>{clicked && <Circle layoutId="circle" />}</Box>
      <Box>{!clicked && <Circle layoutId="circle" />}</Box>
    </div>
  );
};

export default LayoutAnimation;
