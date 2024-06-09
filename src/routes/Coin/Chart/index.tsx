import { useCoinChartData } from '@src/routes/Coin/Chart/useCoinChartData';
import { useOutletContext } from 'react-router-dom';
import ApexChart from 'react-apexcharts';
import Loader from '@src/components/Loader';

const Chart = () => {
  const { coinId } = useOutletContext<{ coinId: string }>();
  const { chartData = [], chartDataLoading } = useCoinChartData(coinId);

  return (
    <>
      <h3>CHART</h3>
      {chartDataLoading ? (
        <Loader />
      ) : (
        <ApexChart
          type="line"
          series={[{ name: 'aa', data: chartData.map((price) => price.close) }]}
          options={{
            chart: {
              height: 500,
              width: 500,
            },
            theme: {
              mode: 'light',
            },
          }}
        />
      )}
    </>
  );
};

export default Chart;
