'use client'
import React from 'react'

import Chart from "react-apexcharts";

const BoreholeTopParameters = () => {
    const options = {
        xaxis: {
            categories: ["Bari", "Nugaal", "Mudug", "Sool", "Sanaag"]
        },
        legend: {
            position: 'top',
        },
        chart: {
            toolbar: {
                show: false
            },
        },

    };

    const series = [
        {
            name: "PH-Yeild",
            data: [30, 40, 25, 50, 49]
        },
        {
            name: "BH Static Level",
            data: [23, 12, 54, 61, 32]
        },
        {
            name: "BH Dynamic Water Level",
            data: [24, 20, 5, 75, 42]
        }
    ];
    return (
        <div className='bg-white rounded-xl p-6' >
            <div className='flex gap-4'>
                <h1 className='font-meduim'>Borehole Top Parameters</h1>
            </div>
            <hr className='my-4' />
            <div className=''>
                <Chart options={options} series={series} type="area" />
            </div>
        </div >
    )
}

export default BoreholeTopParameters