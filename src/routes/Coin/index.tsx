import Container from '@components/Container';
import Header from '@components/Header';
import Title from '@components/Title';
import HomeBtn from '@src/components/HomeBtn';
import { useParams } from 'react-router-dom';

type CoinId = string;

const Coin = () => {
  const { coinId } = useParams<CoinId>();

  return (
    <Container>
      <Header>
        <Title>COIN: {coinId!}</Title>
      </Header>
      <div>
        <HomeBtn />
      </div>
    </Container>
  );
};

export default Coin;
