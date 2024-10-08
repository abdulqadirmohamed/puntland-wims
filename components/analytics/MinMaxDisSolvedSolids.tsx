'use client'
import { BarChart2 } from 'lucide-react';
import React from 'react'
import Chart from "react-apexcharts";

const MinMaxDisSolvedSolids = () => {
  const options = {
    labels: ["Covarage"],
    legend: {
      show: false,
      position: 'bottom',
    },
    colors: ["#15229C"],
    plotOptions: {
      bar: {
        vertical: true,
      },

    },

  };


  const series = [77]
  return (
    <div className='bg-white rounded-xl p-6' >
      <div className='flex gap-4'>
        <h1 className='font-meduim'>Min/Max for dissolvedsolids</h1>
      </div>
      <hr className='my-4' />
      <div className='flex justify-between items-center mx-6 font-medium'>
        <p>Min 595</p>
        <div className='flex items-center gap-1 text-[#393658]'>
          <BarChart2 />
          <p>Max 3879.3</p>
        </div>
      </div>
      <div className='mt-5'>
        <Chart options={options} series={series} type="radialBar" height={300} />
      </div>
    </div >
  )
}

export default MinMaxDisSolvedSolids