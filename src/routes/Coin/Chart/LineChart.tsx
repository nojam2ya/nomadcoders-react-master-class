import ApexChart from 'react-apexcharts';
import { theme } from '@src/style/theme';
import dayjs from 'dayjs';
import { IOhlcvHistorical } from '@src/interfaces';

const LineChart = ({ chartData }: { chartData: IOhlcvHistorical[] }) => {
  console.log(chartData);
  const data = chartData.map((data) => ({
    x: new Date(data.time_close),
    y: [data.high, data.low, data.open, data.close],
  }));
  console.log(data);

  return (
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
        yaxis: {
          show: false,
        },
        xaxis: {
          type: 'datetime',
          labels: { show: false },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          categories: chartData.map((price) =>
            dayjs(price.time_close).format('YYYY-MM-DD HH:mm:ss'),
          ),
        },
        fill: {
          type: 'gradient',
          gradient: { gradientToColors: ['blue'], stops: [0, 100] },
        },
        colors: [theme.bgColor],
        tooltip: {
          y: {
            formatter: (val) => `$${val.toFixed(2)}`,
          },
        },
      }}
    />
  );
};

export default LineChart;
