"use client"
import React from 'react'
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
        labels: ["Planned", "Completed", "Factional", "Non-functional"],
    }
    const series = [5, 1, 22, 2]; //our data
    return (
        <div className='bg-white rounded-xl p-6'>
            <div className='flex gap-4'>
                <h1 className='font-bold'>Water source status  </h1>
                <div className='flex gap-3'>
                    {waterStatus.map((item, index) => (
                        <div className='bg-[#0D6EFD] text-white flex gap-2 items-center rounded-md py-[2px] px-[6px]' key={index}>
                            <h1 className='capitalize text-sm'>{item.title}</h1>
                            <span className='text-sm'>{item.total}</span>
                        </div>
                    ))}
                </div>
            </div>
            <hr className='my-8' />
            <div className=''>
                <ReactApexChart type="donut" options={option} series={series} height={250} />
            </div>
        </div>
    )
}

export default WaterSourceStatus