import styled from 'styled-components';
import { Wrap as HeaderWrap } from '@components/Header/style';

export const Wrap = styled.div`
  position: relative;

  ${HeaderWrap} + div,
  ${HeaderWrap} + ul {
    padding-top: calc(88px + 42px);
  }
`;
