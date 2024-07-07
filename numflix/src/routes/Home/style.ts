import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrap = styled.div`
  /* min-height: 1300px; */
  padding-bottom: 200px;
`;

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
  background-position: center center;
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

export const Slider = styled.div`
  width: 94vw;
  margin: -100px auto 0 auto;
  height: 200px;
  position: relative;
`;

export const PrevBtn = styled.button`
  svg {
    width: 20px;
    height: 20px;

    fill: white;

    position: absolute;
    left: -30px;
    top: 50%;

    transform: translateY(-50%);

    cursor: pointer;
  }
`;

export const NextBtn = styled.button`
  svg {
    width: 20px;
    height: 20px;

    fill: white;

    position: absolute;
    right: -30px;
    top: 50%;

    transform: translateY(-50%);

    cursor: pointer;
  }
`;

export const Row = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;

  top: 0;
  position: absolute;
`;

export const Movie = styled(motion.div)<{ $bgPhoto: string }>`
  height: 200px;
  background-color: white;

  background-image: url(${(props) => props.$bgPhoto});
  background-position: center center;
  background-size: cover;

  &:first-child {
    transform-origin: left center;
  }

  &:last-child {
    transform-origin: right center;
  }
`;

export const Info = styled(motion.div)`
  width: 100%;
  padding: 10px;
  opacity: 0;

  background-color: ${(props) => props.theme.black.lighter};

  position: absolute;
  bottom: 0;

  cursor: pointer;

  h4 {
    text-align: center;
    font-size: 18px;
  }
`;
