'use client'
import React from 'react'
import ReactApexChart from 'react-apexcharts';


const DonutChart = () => {
    const series = [44, 55, 41, 17]
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
      
  return (
    <ReactApexChart options={chartOptions} series={series} type='donut' height={320} width={300}/>
  )
}

export default DonutChart