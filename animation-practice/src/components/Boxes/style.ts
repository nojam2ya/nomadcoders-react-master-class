import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  border-radius: 30px;

  background: white;
  box-shadow: 0px 2px 3px rgba(41, 24, 39, 0.1),
    0px 10px 15px rgba(41, 24, 39, 0.1);

  & + div,
  & + ul {
    margin-left: 20px;
  }
`;
