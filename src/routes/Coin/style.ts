import styled from 'styled-components';

export const Wrap = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  article {
    flex-basis: calc(50% - 4px);
  }
`;

export const BoxInfo = styled.article`
  ul {
    display: flex;
    justify-content: space-between;
    border: 1px solid ${(props) => props.theme.textColor};
    border-radius: 8px;
    padding: 20px;

    font-size: 0.8rem;

    li {
      text-align: center;

      span {
        display: block;
      }

      .tit {
        border-bottom: 1px solid rgba(255, 255, 255, 0.24);
        padding-bottom: 4px;
        margin-bottom: 8px;
        font-weight: 600;
      }

      .con {
        margin-top: 4px;
      }
    }
  }

  .info {
    li:nth-of-type(1) {
      flex-basis: 30%;
    }
    li:nth-of-type(2) {
      flex-basis: 40%;
    }
    li:nth-of-type(3) {
      flex-basis: 30%;
    }
  }

  .description {
    padding: 20px;
  }

  .tickers {
    li:nth-of-type(1) {
      flex-basis: 30%;
    }
    li:nth-of-type(2) {
      flex-basis: 30%;
    }
  }
`;

export const BoxTab = styled.article`
  .tab {
    padding: 20px;
  }
`;

export const TabMenu = styled.ul`
  display: flex;
  justify-content: space-between;

  li {
    width: calc(50% - 2px);

    a {
      display: block;
      padding: 10px;
      border-radius: 8px;

      text-align: center;
      font-size: 0.74rem;
      font-weight: 600;
      color: ${(props) => props.theme.bgColor};

      background-color: ${(props) => props.theme.accentColor};

      &.active,
      &:hover {
        background-color: ${(props) => props.theme.textColor};
      }
    }
  }
`;
