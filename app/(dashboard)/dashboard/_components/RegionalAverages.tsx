import dynamic from 'next/dynamic';
import useStore from '../store';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Charts = () => {
    const { filteredWells } = useStore();
    const chartOptions = {
        chart: {
            id: 'wells-chart',
            stacked: true,
            toolbar: {
                show: true,
            },
        },
        xaxis: {
            categories: filteredWells.map((well) => well?.name || 'Unknown'),
        },
        total: {
            enable: true,
        },
    };

    const chartSeries = [
        {
            name: 'pH Level',
            data: filteredWells.map((well) => well?.average_ph || 0),
        },
        {
            name: 'Conductivity',
            data: filteredWells.map((well) => well?.average_conductivity || 0),
        },
        {
            name: 'Price',
            data: filteredWells.map((well) => well?.average_price || 0),
        },
    ];

    return (
        <Chart options={chartOptions} series={chartSeries} type='bar' height={320} width={300} />
    );
};

export default Charts;
