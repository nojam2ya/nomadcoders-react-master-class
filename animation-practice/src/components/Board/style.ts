import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrap = styled(motion.div)``;

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  width: 50vw;
  gap: 10px;

  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

export const Box = styled(motion.div)`
  height: 150px;
  border-radius: 30px;

  background: white;
  box-shadow: 0px 2px 3px rgba(41, 24, 39, 0.1),
    0px 10px 15px rgba(41, 24, 39, 0.1);
`;

export const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 0;
  top: 0;

  div {
    width: 960px;
  }
`;
