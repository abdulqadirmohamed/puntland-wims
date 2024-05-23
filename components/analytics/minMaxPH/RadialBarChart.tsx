// components/RadialBarChart.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
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

  const series = [minPh, maxPh];

  return (
    <div>
      <Chart options={chartOptions} series={series} type="radialBar" height={350} />
    </div>
  );
};

export default RadialBarChart;
