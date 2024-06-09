import axios from 'axios';

export const getCoins = async () =>
  axios.get('https://api.coinpaprika.com/v1/coins').then((res) => res.data);

export const getCoin = async (coinId: string) =>
  await axios
    .get(`https://api.coinpaprika.com/v1/coins/${coinId}`)
    .then((res) => res.data);

export const getTickers = async (coinId: string) =>
  await axios
    .get(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
    .then((res) => res.data);
