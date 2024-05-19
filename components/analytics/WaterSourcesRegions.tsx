"use client"
import React from 'react'
import Chart from "react-apexcharts";

const WaterSourcesRegions = () => {
  const options = {
    labels: ["Bari", "Nugaal", "Mudug", "Sool", "Sanaag"],
    legend: {
      show: true,
      position: 'left'
    },
    theme: {
      monochrome: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        vertical: true,
      },
      
    },
  };
  const series = [15, 44, 55, 41, 17]

  return (
    <div className='bg-white rounded-xl p-6'>
      <div className='flex gap-4'>
        <h1 className='font-meduim'>Water Sources Regions</h1>
      </div>
      <hr className='my-4' />
      <div className='flex items-center justify-center'>
        <Chart options={options} series={series} type="pie" />
      </div>
    </div>
  )
}

export default WaterSourcesRegions