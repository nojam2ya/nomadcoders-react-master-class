import { IOhlcvHistorical } from '@src/interfaces';
import ApexChart from 'react-apexcharts';

const CandleChart = ({ chartData }: { chartData: IOhlcvHistorical[] }) => {
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
