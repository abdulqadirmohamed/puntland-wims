import React from 'react';
import Chart from 'react-apexcharts';

type StatusTotals = {
    functional: number;
    nonFunctional: number;
    planned: number;
    completed: number;
};

type Props = {
    totals: StatusTotals;
};

const WaterSourceStatus: React.FC<Props> = ({ totals }) => {
    const chartOptions = {
        chart: {
            type: 'donut',
        },
        legend:{
            position: 'bottom'
        },
        labels: ['Planned', 'Completed', 'Functional', 'Non Functional'],
        colors: ['#FDB515', '#15229C', '#2ED325', '#FC300A'],
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

    const chartSeries = [totals.planned, totals.completed, totals.functional, totals.nonFunctional];

    return (
        <Chart
            options={chartOptions}
            series={chartSeries}
            type="donut"
            width="380"
        />
    );
};

export default WaterSourceStatus;
