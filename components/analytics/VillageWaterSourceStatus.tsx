'use client'
import React from 'react'
import Chart from "react-apexcharts";

const VillageWaterSourceStatus = () => {
  const options = {
    labels: ["No Water Sources", "Water Sources"],
    legend: {
      show: true,
      position: 'bottom',
    },
    colors: ["#FDB515","#15229C"],
    plotOptions: {
      bar: {
        vertical: true,
      },

    },
    
  };
  

  const series = [27, 73]
  return (
    <div>
      <div className='bg-white rounded-xl p-6'>
        <div className='flex gap-4'>
          <h1 className='font-medium'>Village Water source status(%)</h1>
        </div>
        <hr className='my-4' />
        <div className=''>
          <Chart options={options} series={series} type="donut" />
        </div>
      </div>
    </div>
  )
}

export default VillageWaterSourceStatus