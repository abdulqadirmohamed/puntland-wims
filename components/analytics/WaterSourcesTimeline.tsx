"use client"
import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import Chart from "react-apexcharts";

const WaterSourcesTimeline = () => {
    const [status, setStatus] = useState({
        series: [
            {
              name: 'Dharkaynlay',
              data: [
                {
                  x: 'Abaaray',
                  y: [
                    new Date('2019-03-05').getTime(),
                    new Date('2019-03-08').getTime()
                  ]
                },
              ]
            },
            {
              name: 'Boodacad',
              data: [
                {
                    x: 'Boodacad',
                    y: [
                      new Date('2019-03-11').getTime(),
                      new Date('2019-03-16').getTime()
                    ]
                  }
              ]
            },
            {
              name: 'Gocondhaale',
              data: [
                {
                    x: 'Gocondhaale',
                    y: [
                      new Date('2019-03-11').getTime(),
                      new Date('2019-03-16').getTime()
                    ]
                  }
              ]
            },

          
          ],
       option :{
            chart: {
                type: 'rangeBar'
            },
            plotOptions: {
                bar: {
                    horizontal: true
                }
            }
    
        }
    })
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
                <ReactApexChart type="rangeBar" options={status.option} series={status.series} height={250} />
            </div>
        </div>
    )
}

export default WaterSourcesTimeline