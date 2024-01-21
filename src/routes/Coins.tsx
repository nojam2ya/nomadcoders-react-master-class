import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

const Container = styled.div`
  max-width: 480px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const RightArrow = styled.span`
  display: block;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
`;

const Coin = styled.li`
  margin-bottom: 10px;
  border-radius: 50px;
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.textColor};
  transition-property: color, background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
  position: relative;
  &:hover {
    color: ${(props) => props.theme.bgColor};
    background-color: ${(props) => props.theme.textColor};
    ${RightArrow} {
      right: 20px;
    }
  }
  a {
    display: flex;
    align-items: center;
    padding: 20px;
  }
  ${RightArrow} {
    transition-property: right;
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_acctive: boolean;
  type: string;
}

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

function Coins() {
  const { isLoading, data: coins = [] } = useQuery<ICoin[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });

  return (
    <Container>
      <Header>
        <Title>🙏 COINS 💸</Title>
      </Header>
      {isLoading ? (
        <Loader>"loading..."</Loader>
      ) : (
        <CoinsList>
          {coins.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLocaleLowerCase()}`}
                  alt=""
                />
                {coin.name} <RightArrow>&rarr;</RightArrow>
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
