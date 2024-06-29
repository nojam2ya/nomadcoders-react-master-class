import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 30px 10px 20px 10px;
  border-radius: 6px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  cursor: pointer;

  background-color: rgba(255, 255, 255, 0.08);

  input {
    display: block;
    border: 0;
    border-radius: 6px;
    padding: 4px 10px;
    margin-bottom: 10px;

    color: white;

    background-color: rgba(255, 255, 255, 0.2);
  }

  span {
    display: block;
    color: white;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
