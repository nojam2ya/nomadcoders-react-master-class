import Header from '@src/components/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
  padding-top: 80px;
`;

function App() {
  return (
    <Wrap>
      <Header />
      <Outlet />
    </Wrap>
  );
}

export default App;
