import { IOhlcvHistorical } from '@src/interfaces';
import ApexChart from 'react-apexcharts';

const CandleChart = ({ chartData }: { chartData: IOhlcvHistorical[] }) => {
  const data = chartData.map((data) => ({
    x: new Date(data.time_close),
    y: [data.high, data.low, data.open, data.close],
  }));

  return (
    <ApexChart
      options={{
        chart: {
          type: 'candlestick',
        },
      }}
    />
  );
};

export default CandleChart;
