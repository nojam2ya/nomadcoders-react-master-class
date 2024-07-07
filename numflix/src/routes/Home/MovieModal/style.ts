import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Overlay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;

  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;
  top: 0;
  left: 0;
`;

export const Movie = styled(motion.div)`
  overflow: hidden;
  border-radius: 10px;
  width: 40vw;
  height: 80vh;

  background-color: ${(props) => props.theme.black.lighter};

  position: absolute;
  top: 10vh;
  left: 30vw;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 300px;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      ${(props) => props.theme.black.lighter}
    );
  }
`;

export const MovieCover = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const MovieTitle = styled.h3`
  padding: 0 20px;

  color: ${(props) => props.theme.white.lighter};
  font-size: 36px;
  letter-spacing: 6px;
  position: absolute;
  top: calc(300px - 40px);
  left: 0;
`;

export const MovieOverview = styled.p`
  padding: 20px;
  line-height: 1.6;
`;
