'use client'
import React from 'react'

import Chart from "react-apexcharts";

const BoreholeTopParameters = () => {
    const options = {
        xaxis: {
            categories: ["Bari", "Mudug", "Nugaal", "Sanaag", "Sool"]
        },
        legend: {
            position: 'top',
        },
        chart: {
            toolbar: {
                show: false
            },
        },
        colors: ['#2DB6F5', '#F765A3', '#757FEF'],
        stroke: {
            width: [3, 3, 3]
        },

    };

    const series = [
        {
            name: "PH-Yeild",
            data: [12, 40, 25, 0, 0]
        },
        {
            name: "BH Static Level",
            data: [380, 120, 244, 0, 0]
        },
        {
            name: "BH Dynamic Water Level",
            data: [24, 0, 5, 0, 0]
        }
    ];
    return (
        <div className='bg-white rounded-xl p-6' >
            <div className='flex gap-4'>
                <h1 className='font-meduim'>Borehole Top Parameters</h1>
            </div>
            <hr className='my-4' />
            <div className='max-w-[700px]'>
                <Chart options={options} series={series} type="line" />
            </div>
        </div >
    )
}

export default BoreholeTopParameters