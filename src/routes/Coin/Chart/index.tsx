import { useCoinChartData } from '@src/routes/Coin/Chart/useCoinChartData';
import { useOutletContext } from 'react-router-dom';
import ApexChart from 'react-apexcharts';
import Loader from '@src/components/Loader';
import { theme } from '@src/style/theme';

const Chart = () => {
  const { coinId } = useOutletContext<{ coinId: string }>();
  const { chartData = [], chartDataLoading } = useCoinChartData(coinId);

  return (
    <>
      {chartDataLoading ? (
        <p>Loading</p>
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: 'close',
              data: chartData.map((price) => price.close),
            },
          ]}
          options={{
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
              background: 'trnasparent',
            },
            grid: {
              show: false,
            },
            theme: {
              mode: 'light',
            },
            stroke: {
              curve: 'smooth',
              width: 2,
            },
            colors: [theme.bgColor],
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: { show: false },
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
            },
          }}
        />
      )}
    </>
  );
};

export default Chart;
