
import React from 'react';
import { ApexOptions } from 'apexcharts';

import Chart from 'react-apexcharts'

interface RadialBarChartProps {
  minPh: number;
  maxPh: number;
}

const RadialBarChart: React.FC<RadialBarChartProps> = ({ minPh, maxPh }) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'Coverage',
          },
        },
      },
    },
    colors: ["#15229C"],
    labels: ['Min pH', 'Max pH'],
  };

  // const series = [minPh, maxPh];
  const series = [maxPh];

  return (
    <div>
      <Chart options={chartOptions} series={series} type="radialBar" height={350} />
    </div>
  );
};

export default RadialBarChart;
