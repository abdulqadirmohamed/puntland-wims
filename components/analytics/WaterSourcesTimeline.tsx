"use client"
import React, { useState } from 'react'
import Chart from "react-apexcharts";

const WaterSourcesTimeline = () => {
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
      categories: ['Abaaray', 'Boodacad', 'Gocondhaale'],
    },
  };
  const chartSeries = [
    {
      data: [
        {
          x: 'Abaaray',
          y: [new Date('2024-08-01').getTime(), new Date('2024-08-10').getTime()],
        },
        {
          x: 'Boodacad',
          y: [new Date('2024-10-01').getTime(), new Date('2024-10-20').getTime()],
        },
        {
          x: 'Gocondhaale',
          y: [new Date('2025-01-01').getTime(), new Date('2025-01-10').getTime()],
        },
      ],
    },
  ]
  const waterStatus = [
    { title: "Borehole", total: 5 }
  ]



  return (
    <div className='bg-white rounded-xl p-6'>
      <div className=' gap-4'>
        <h1>Planed Water sources timeline  </h1>
        <div className='flex gap-3'>
          {waterStatus.map((item, index) => (
            <div className='bg-[#0D6EFD] text-white flex gap-2 items-center rounded-md py-[2px] px-[6px]' key={index}>
              <h1 className='capitalize text-sm'>{item.title}</h1>
              <span className='text-sm'>{item.total}</span>
            </div>
          ))}
        </div>
      </div>
      <hr className='my-4' />
      <div className='max-w-[700px] mx-auto'>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="rangeBar"
          height="400"
        />
      </div>
    </div>
  )
}

export default WaterSourcesTimeline