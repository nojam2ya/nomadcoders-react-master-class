import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { gradientState } from './atoms';

const Wrap = styled.div`
  width: 100vw;
  /* height: 200vh; */
  height: 100vh;
  padding: 0;
  margin: 0;
  background: linear-gradient(-90deg, #1ed7b5, #f0f9a7);

  .flex-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Root = () => {
  const gradient = useRecoilValue(gradientState);
  return (
    <Wrap style={{ background: gradient }}>
      <Header />
      <div className="flex-box">
        <Outlet />
      </div>
    </Wrap>
  );
};

export default Root;
