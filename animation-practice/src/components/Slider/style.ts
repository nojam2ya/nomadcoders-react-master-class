import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrap = styled.div`
  overflow: hidden;

  .flex-box {
    width: 100vw;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
  }
`;

export const Box = styled(motion.div)`
  width: 200px;
  height: 100px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: black;
  font-size: 28px;

  position: absolute;

  background: white;
  box-shadow: 0px 2px 3px rgba(41, 24, 39, 0.1),
    0px 10px 15px rgba(41, 24, 39, 0.1);
`;
