import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrap = styled.div``;

export const Banner = styled.div<{ $bgPhoto: string }>`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  padding: 60px;

  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.9)
    ),
    url(${(props) => props.$bgPhoto});
  background-size: cover;
`;

export const Title = styled.h2`
  font-size: 68px;
  font-weight: 600;
`;

export const Overview = styled.p`
  max-width: 50%;
  font-size: 24px;
  line-height: 1.4;

  h2 + & {
    margin-top: 28px;
  }
`;

///////////////////

export const Slider = styled.div`
  margin-top: -100px;
  overflow: hidden;
  height: 200px;
  position: relative;
`;

export const Row = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  position: absolute;
`;

export const Movie = styled(motion.div)`
  height: 200px;
  background-color: white;
`;
