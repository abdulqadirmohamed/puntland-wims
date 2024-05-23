import React from 'react';
import Chart from 'react-apexcharts';

type Well = {
    average_ph: number | null;
};

type Village = {
    id: number;
    name: string;
    Well: Well[];
};

type Props = {
    villages: Village[];
    minPh: number;
    maxPh: number;
};

const PieChartMinMxPHP: React.FC<Props> = ({ villages, minPh, maxPh }) => {
    const villagesWithWater = villages.filter(village => village.Well.length > 0).length;
    const villagesWithoutWater = villages.length - villagesWithWater;

    const chartData = [villagesWithWater, villagesWithoutWater];
    const chartLabels = ['With Water Source', 'Without Water Source'];

    const chartOptions = {
        labels: chartLabels,
        legend: {
            position: 'bottom',
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
        <div>
            <Chart
                options={chartOptions}
                series={chartData}
                type="pie"
                width="380"
            />
            <p>Min pH: {minPh.toFixed(2)}</p>
            <p>Max pH: {maxPh.toFixed(2)}</p>
        </div>
    );
};

export default PieChartMinMxPHP;
