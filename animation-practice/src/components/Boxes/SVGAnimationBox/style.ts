import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrap = styled(motion.div)`
  display: flex;
  width: 150px;
  height: 150px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;

  background: #1ed7b5;
  box-shadow: 0px 2px 3px rgba(41, 24, 39, 0.1),
    0px 10px 15px rgba(41, 24, 39, 0.1);

  & + div,
  & + ul {
    margin-left: 20px;
  }
`;

export const Svg = styled.svg`
  width: 120px;
  height: 120px;

  path {
    stroke: white;
    stroke-width: 4;
  }
`;
