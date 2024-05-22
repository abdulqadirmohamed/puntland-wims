import React from 'react';
import Chart from 'react-apexcharts';

type Project = {
    name: string;
    start_date: string;
    expected_date: string;
};

type Props = {
    projects: Project[];
};

const RangeBarChart: React.FC<Props> = ({ projects }) => {
    const chartOptions = {
        chart: {
            type: 'rangeBar',
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            categories: projects.map(project => project.name),
        },
    };

    const chartSeries = [
        {
            data: projects.map(project => ({
                x: project.name,
                y: [new Date(project.start_date).getTime(), new Date(project.expected_date).getTime()],
            })),
        },
    ];

    return (
        <Chart
            options={chartOptions}
            series={chartSeries}
            type="rangeBar"
            height="270"
        />
    );
};

export default RangeBarChart;
