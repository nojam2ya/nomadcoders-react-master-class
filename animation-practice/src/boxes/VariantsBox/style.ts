import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrap = styled(motion.ul)`
  width: 150px;
  height: 150px;
  border-radius: 30px;
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
  padding: 14px;

  background: rgba(255, 255, 255, 0.32);
  box-shadow: 0px 2px 3px rgba(41, 24, 39, 0.1),
    0px 10px 15px rgba(41, 24, 39, 0.1);

  & + div,
  & + ul {
    margin-left: 20px;
  }
`;

export const Circle = styled(motion.li)`
  border-radius: 100%;

  background: white;
  box-shadow: 0px 2px 3px rgba(41, 24, 39, 0.1),
    0px 10px 15px rgba(41, 24, 39, 0.1);
`;
