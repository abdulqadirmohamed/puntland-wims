import React from 'react';
import Chart from 'react-apexcharts';

type Village = {
    id: number;
    name: string;
    Well: { name: string }[];
};

type Props = {
    villages: Village[];
};

const VillagePieChart: React.FC<Props> = ({ villages }) => {
    const villagesWithWater = villages.filter(village => village.Well.length > 0).length;
    const villagesWithoutWater = villages.length - villagesWithWater;

    const chartData = [villagesWithWater, villagesWithoutWater];
    const chartLabels = ['Water Source', 'No Water Source'];

    const chartOptions = {
        labels: chartLabels,
        legend: {
            position: 'bottom',
        },
        colors: ["#15229C","#FDB515"],
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
        <div>
            <div className='bg-white rounded-xl p-6'>
                <div className='flex gap-4'>
                    <h1 className='font-medium'>Village Water source status(%)</h1>
                </div>
                <hr className='my-4' />
                <div className=''>
                    <Chart
                        options={chartOptions}
                        series={chartData}
                        type="donut"
           
                    />
                </div>
            </div>
        </div>
    );
};

export default VillagePieChart;
