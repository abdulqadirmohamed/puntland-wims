import dynamic from 'next/dynamic';
import useStore from '../store';


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DonutChart = () => {
  const { wellStatusCounts } = useStore();
  const { planned, completed, functional, nonFunctional } = wellStatusCounts;

  const chartOptions = {
    chart: {
      type: 'donut',
      toolbar:{
        show: true
    },
    },
    legend:{
        position: 'bottom'
    },
    labels: ['Planned', 'Completed', 'Functional', 'Non Functional'],
    colors: ['#FDB515', '#15229C', '#2ED325', '#FC300A'],
  };

  const chartSeries = [planned, completed, functional, nonFunctional];

  return (
    <div>
      <Chart options={chartOptions} series={chartSeries} type="donut" height={250} width={300} />
    </div>
  );
};

export default DonutChart;
