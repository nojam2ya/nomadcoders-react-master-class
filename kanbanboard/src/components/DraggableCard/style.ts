import styled from 'styled-components';

interface IWrap {
  isDragging: boolean;
}

export const Wrap = styled.div<IWrap>`
  overflow: hidden;
  margin-bottom: 4px;
  padding: 10px 48px 10px 16px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.cardColor};

  ${(props) =>
    props.isDragging
      ? `
  box-shadow: 2px 2px 10px rgba(0,0,0,.2);
  opacity: .88;
      `
      : ''}

  position: relative;

  .delete {
    display: block;
    position: absolute;
    font-size: 12px;
    padding: 10px 16px;
    top: 0px;
    right: 0px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.outBoardColor};
    }
  }
`;
