import CustomScrollContainer from '@src/components/CustomScrollContainer';
import Header from '@src/components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <CustomScrollContainer>
      <Header />
      <Outlet />
    </CustomScrollContainer>
  );
}

export default App;
