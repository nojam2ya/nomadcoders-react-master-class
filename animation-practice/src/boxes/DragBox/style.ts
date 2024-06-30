import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrap = styled(motion.div)`
  width: 150px;
  height: 150px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  background: #1ed7b5;
  box-shadow: 0px 2px 3px rgba(41, 24, 39, 0.1),
    0px 10px 15px rgba(41, 24, 39, 0.1);

  & + div,
  & + ul {
    margin-left: 20px;
  }
`;

export const InnerBox = styled(motion.div)`
  width: 90px;
  height: 90px;
  border-radius: 18px;

  background-color: white;
  box-shadow: 0px 2px 3px rgba(41, 24, 39, 0.1),
    0px 10px 15px rgba(41, 24, 39, 0.1);

  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;
