import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrap = styled(motion.header)`
  width: 100%;
  position: fixed;
  top: 0;
  padding: 0 40px;
`;

export const Nav = styled.nav`
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;

  font-size: 12px;
  color: #fff;

  button {
    color: #fff;
  }
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 95px;
  height: 25px;

  stroke: #fff;
  stroke-width: 5;
  fill: ${(props) => props.theme.red};
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 20px;

  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;

  position: relative;

  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;

export const Circle = styled(motion.span)`
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 20px;

  background-color: ${(props) => props.theme.red};

  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const SearchBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    transform-origin: right center;
    padding: 8px 10px 8px 40px;
    color: #fff;
    border: 1px solid ${(props) => props.theme.white.darker};
    background-color: rgba(0, 0, 0, 0.6);

    &:active {
      background-color: rgba(0, 0, 0, 0.6);
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }

  button {
    width: 20px;
    height: 20px;
    fill: #fff;
    cursor: pointer;
  }
`;
