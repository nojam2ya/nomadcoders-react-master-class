import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
`;

export const ScrollWrap = styled.div`
  overflow-y: scroll;
  height: 100vh;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const ScrollBar = styled.span<{
  $scrollTop: number;
  $scrollHeight: number;
  $isVisible: boolean;
}>`
  display: block;
  width: 6px;
  height: calc(100vh - 40px);
  border-radius: 5px;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};

  background-color: rgba(255, 255, 255, 0.2);

  position: fixed;
  right: 10px;
  top: 20px;

  transition: opacity 0.3s;

  &::before {
    content: '';
    width: 6px;
    height: ${(props) => props.$scrollHeight - 40}px;
    border-radius: 5px;

    background-color: ${(props) => props.theme.white.darker};

    position: absolute;
    top: ${(props) => props.$scrollTop}px;
    right: 0px;
  }
`;
