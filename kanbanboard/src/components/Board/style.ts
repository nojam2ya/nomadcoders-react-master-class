import styled from 'styled-components';

interface IWrapProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

export const Wrap = styled.div<IWrapProps>`
  padding: 30px 10px 20px 10px;
  background-color: ${(props) =>
    props.isDraggingOver
      ? props.theme.inBoardColor
      : props.isDraggingFromThis
      ? props.theme.outBoardColor
      : props.theme.boardColor};
  border-radius: 6px;
  min-height: 200px;

  transition: background-color 0.3s ease-in-out;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  h5 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
