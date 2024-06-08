import styled from 'styled-components';

export const Wrap = styled.header`
  width: 100%;
  padding: 40px;

  background-color: ${(props) => props.theme.bgColor};
  box-shadow: 0px 0px 10px 0px ${(props) => props.theme.accentColor};

  position: fixed;
  top: 0;
  left: 0;
`;
