import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getCoins = async () =>
  axios.get('https://api.coinpaprika.com/v1/coins').then((res) => res.data);

export const useCoins = () => {
  const { data = [] } = useQuery({
    queryKey: ['coins'],
    queryFn: () => getCoins(),
  });

  return { coins: data.slice(0, 100) };
};
