import styled from 'styled-components';

export const WrapList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 26px;

  & + ul {
    border-top: 1px solid #d6d1d1;
  }

  li {
    flex-basis: 33%;
  }
`;

export const Title = styled.span`
  display: block;

  letter-spacing: -0.06em;
  font-weight: 600;
  text-align: center;
`;

export const Content = styled.span<{ isMinus?: boolean }>`
  display: block;

  color: ${(props) => (props.isMinus ? 'red' : 'green')};
  text-align: center;
`;
