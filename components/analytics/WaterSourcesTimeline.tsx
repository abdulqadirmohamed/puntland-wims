"use client"
import React from 'react'
import ReactApexChart from 'react-apexcharts';
import Chart from "react-apexcharts";

const WaterSourcesTimeline = () => {
    const waterStatus = [
        { title: "Borehole", total: 5 },
        { title: "dam", total: 20 },
        { title: "Shallowwell", total: 20 },
        { title: "Springwell", total: 30 },
    ]
    const option = {
        chart: {
            height: 350,
            type: 'rangeBar'
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        }

    }
    const series = [
        {
            data: [
                {
                    x: 'Abaaray',
                    y: [
                        new Date('2024-03-01').getTime(),
                        new Date('2024-03-08').getTime()
                    ]
                },
                {
                    x: 'Boodacad',
                    y: [
                        new Date('2024-03-04').getTime(),
                        new Date('2024-03-12').getTime()
                    ]
                },
                {
                    x: 'Gocondhaale',
                    y: [
                        new Date('2024-03-02').getTime(),
                        new Date('2024-03-06').getTime()
                    ]
                },

            ]
        }
    ]

    return (
        <div className='bg-white rounded-xl p-6'>
            <div className='flex gap-4'>
                <h1 className='font-bold'>Planed Water sources timeline  </h1>
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
                <ReactApexChart type="rangeBar" options={option} series={series} height={250} />
            </div>
        </div>
    )
}

export default WaterSourcesTimeline