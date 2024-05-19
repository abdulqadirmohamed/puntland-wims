"use client"

import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const RegionalAverages = () => {

    const series = [
        {
            name: 'Bari',
            data: [44, 55]
        },
        {
            name: 'Mudug',
            data: [44, 55]
        },
        {
            name: 'Nugaal',
            data: [44, 55]
        },
    ]
    const option = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }

        }
    }


    return (
        <div className='bg-white rounded-xl p-6'>
            <div className='flex gap-4'>
                <h1 className='font-medium'>Regional Averages</h1>
            </div>
            <hr className='my-4' />
            <div className='max-w-[700px]'>
                <ReactApexChart
                    type="bar"
                    options={option}
                    series={series}
                    height={300} />
            </div>
        </div>
    )
}


export default RegionalAverages