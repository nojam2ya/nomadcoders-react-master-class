import { useOutletContext } from 'react-router-dom';

const Tickers = () => {
  const { coinId } = useOutletContext<{ coinId: string }>();

  return <h3>TICKERS</h3>;
};

export default Tickers;
