"use client"
import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import Chart from "react-apexcharts";

const WaterSourceStatus = () => {

    const waterStatus = [
        { title: "Borehole", total: 5 },
        { title: "dam", total: 20 },
        { title: "Shallowwell", total: 20 },
        { title: "Springwell", total: 30 },
    ]
    const option = {
        chart: {
            id: 'apexchart-example'
        },
        legend: {
            position: 'bottom'
        },
        
        colors: ["#FDB515", "#15229C", "#2ED325", "#FC300A"],
        plotOptions: {
            bar: {
                horizontal: false
            }
        },
        labels: ["Planned", "Completed", "Factional", "Non-functional"],
    }
    const series = [5, 1, 22, 2]; //our data
    return (
        <div className='bg-white rounded-xl p-6'>
            <div className='flex flex-col xl:flex-row gap-4'>
                <h1>Water source status  </h1>
                <div className='flex flex-wrap gap-1'>
                    {waterStatus.map((item, index) => (
                        <div className='bg-[#0D6EFD] text-white flex gap-2 items-center rounded-md py-[2px] px-[6px]' key={index}>
                            <h1 className='capitalize text-sm'>{item.title}</h1>
                            <span className='text-xs'>{item.total}</span>
                        </div>
                    ))}
                </div>
            </div>
            <hr className='my-4' />
            <div className='max-w-[700px]'>
                <ReactApexChart type="donut" options={option} series={series} height={300} />
            </div>
        </div>
    )
}

export default WaterSourceStatus


