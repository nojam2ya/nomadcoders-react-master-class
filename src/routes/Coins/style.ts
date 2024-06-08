import styled from 'styled-components';

export const CoinsList = styled.ul`
  max-width: 320px;
  margin: 0 auto;
`;

export const Coin = styled.li`
  a {
    display: flex;
    padding: 14px 24px;
    border-radius: 50px;
    border: 1px solid ${(props) => props.theme.textColor};

    font-weight: 400;
    transition: all 0.2s ease-in;

    .text {
      flex-grow: 1;
    }
    .arrow {
      transition: all 0.2s ease-in;
    }
  }

  & + li {
    margin-top: 4px;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.bgColor};
      background-color: ${(props) => props.theme.textColor};

      .arrow {
        transform: translateX(10px);
      }
    }
  }
`;
