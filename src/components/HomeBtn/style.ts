import styled from 'styled-components';

export const Wrap = styled.button`
  a {
    display: inline-flex;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;

    font-size: 10px;
    font-weight: 600;
    box-shadow: 0px 0px 10px 0px ${(props) => props.theme.accentColor};
    background-color: ${(props) => props.theme.textColor};
  }

  position: fixed;
  right: 20px;
  bottom: 20px;
`;
