import Title from '@components/Title';
import Container from '@components/Container';
import Header from '@components/Header';
import { Coin, CoinsList } from './style';
import { useCoins } from '@routes/Coins/useCoins';
import { Link } from 'react-router-dom';

interface CoinI {
  id: string;
  is_active: boolean;
  is_new: boolean;
  name: string;
  rank: number;
  symbol: string;
  type: string;
}

const Coins = () => {
  const { coins } = useCoins();

  return (
    <Container>
      <Header>
        <Title>COINS</Title>
      </Header>
      <CoinsList>
        {coins &&
          coins.map((coin: CoinI) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`}>
                <span className="text">{coin.name}</span>
                <span className="arrow">&rarr;</span>
              </Link>
            </Coin>
          ))}
      </CoinsList>
    </Container>
  );
};

export default Coins;
