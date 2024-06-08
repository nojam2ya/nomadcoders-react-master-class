import Coin from '@routes/Coin';
import Coins from '@routes/Coins';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
