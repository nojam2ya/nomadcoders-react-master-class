import { ICoinInfo, ITickers } from '@src/interfaces';
import { Content, Title, WrapList } from './style';
import { useOutletContext } from 'react-router-dom';

const Tickers = () => {
  const { tickers } = useOutletContext<{
    coin: ICoinInfo;
    tickers: ITickers;
  }>();

  return (
    <>
      <WrapList>
        <li>
          <Title>1시간 변동률</Title>
          <Content isMinus={tickers.quotes.USD.percent_change_1h < 0}>
            {tickers.quotes.USD.percent_change_1h}
          </Content>
        </li>
        <li>
          <Title>12시간 변동률</Title>
          <Content isMinus={tickers.quotes.USD.percent_change_12h < 0}>
            {tickers.quotes.USD.percent_change_12h}
          </Content>
        </li>
        <li>
          <Title>24시간 변동률</Title>
          <Content isMinus={tickers.quotes.USD.percent_change_24h < 0}>
            {tickers.quotes.USD.percent_change_24h}
          </Content>
        </li>
      </WrapList>
      <WrapList>
        <li>
          <Title>7일 변동률</Title>
          <Content isMinus={tickers.quotes.USD.percent_change_7d < 0}>
            {tickers.quotes.USD.percent_change_7d}
          </Content>
        </li>
        <li>
          <Title>30일 변동률</Title>
          <Content isMinus={tickers.quotes.USD.percent_change_30d < 0}>
            {tickers.quotes.USD.percent_change_30d}
          </Content>
        </li>
        <li>
          <Title>1년 변동률</Title>
          <Content isMinus={tickers.quotes.USD.percent_change_1y < 0}>
            {tickers.quotes.USD.percent_change_1y}
          </Content>
        </li>
      </WrapList>
    </>
  );
};

export default Tickers;
