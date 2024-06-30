import { Wrap } from '@src/boxes/GesturesBox/style';

const gesturesVars = {
  hover: { rotate: 90, scale: 1.2 },
  tap: { borderRadius: '100%', rotate: -90, scale: 0.8 },
};

const GesturesBox = () => {
  return <Wrap variants={gesturesVars} whileHover="hover" whileTap="tap" />;
};

export default GesturesBox;
