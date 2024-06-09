import { getTickersOhlcvHistorical } from '@src/apis';
import { useQuery } from '@tanstack/react-query';

interface IOhlcvHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

export const useCoinChartData = (coinId: string) => {
  const { data, isLoading } = useQuery<IOhlcvHistorical[]>({
    queryKey: ['ohlcv-historical', { coinId }],
    queryFn: () => getTickersOhlcvHistorical(coinId),
  });

  return { chartData: data, chartDataLoading: isLoading };
};
