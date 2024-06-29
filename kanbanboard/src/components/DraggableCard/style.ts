import styled from 'styled-components';

interface IWrap {
  isDragging: boolean;
}

export const Wrap = styled.div<IWrap>`
  padding: 10px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.cardColor};
  margin-bottom: 4px;
  ${(props) =>
    props.isDragging
      ? `
  box-shadow: 2px 2px 10px rgba(0,0,0,.2);
  opacity: .88`
      : ''}
`;
