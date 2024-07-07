import styled from 'styled-components';

export const Wrap = styled.div`
  /* min-height: 1300px; */
  padding: 90px;
`;

export const Loading = styled.div`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    svg {
      width: 30px;
      height: 10px;
      fill: #fff;
    }
  }

  ul {
    display: flex;

    li {
      display: flex;
      padding: 0px 10px;
      justify-content: center;

      align-items: center;

      cursor: pointer;

      & + li {
        border-left: 2px solid ${(props) => props.theme.white.darker};
      }
    }
  }
`;
