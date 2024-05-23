import React from 'react';
import Chart from 'react-apexcharts';

type Region = {
    id: number;
    name: string;
    Well: { name: string }[];
};

type Props = {
    regions: Region[];
};

const RegionPieChart: React.FC<Props> = ({ regions }) => {
    const chartData = regions.map(region => region.Well.length);
    const chartLabels = regions.map(region => region.name);

    const chartOptions = {
        labels: chartLabels,
        legend: {
            position: 'left',
        },
        theme: {
            monochrome: {
                enabled: true
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
    };

    return (
        <div className='bg-white rounded-xl p-6'>
            <div className='flex gap-4'>
                <h1 className='font-meduim'>Water Sources Regions</h1>
            </div>
            <hr className='my-4' />
            <div className='capitalize'>
                <Chart
                    options={chartOptions}
                    series={chartData}
                    type="pie"
                   
                />
            </div>
        </div>
    );
};

export default RegionPieChart;
