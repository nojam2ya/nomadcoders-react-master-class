import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;

  background-color: ${(props) => props.theme.boardColor};

  h5 {
    padding: 42px 16px 4px 16px;
    font-weight: bold;
    font-size: 22px;
    text-align: center;
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: 0 16px;
  margin-top: 16px;

  input {
    opacity: 0.4;
    border-radius: 20px;
    border: 0;
    width: 100%;
    padding: 10px 14px;

    &:focus {
      opacity: 1;
      outline: 0;
    }
  }
`;

interface IWrapProps {
  $isDraggingOver: boolean;
  $isDraggingFromThis: boolean;
}

export const BoxCard = styled.div<IWrapProps>`
  flex-grow: 1;
  min-height: 200px;
  margin-top: 10px;
  padding: 14px 16px 20px 16px;

  background-color: ${(props) =>
    props.$isDraggingOver
      ? props.theme.inBoardColor
      : props.$isDraggingFromThis
      ? props.theme.outBoardColor
      : 'transparent'};

  transition: background-color 0.3s ease-in-out;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
