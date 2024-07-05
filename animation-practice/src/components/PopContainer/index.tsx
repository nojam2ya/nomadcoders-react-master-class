import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Popup from './Popup';

const PopContainer = () => {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  return (
    <>
      <button onClick={toggleShowing}>toggle popup</button>
      <AnimatePresence>{showing && <Popup />}</AnimatePresence>
    </>
  );
};

export default PopContainer;
