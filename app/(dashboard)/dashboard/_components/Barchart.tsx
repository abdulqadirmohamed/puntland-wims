import React from 'react'
import Chart from 'react-apexcharts'

const Barchart = () => {


    const series = [44, 55, 41]
    const options = {
        chart: {
            type: 'donut',
        },
        legend: {
            position: 'bottom'
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    const waterStatus = [
        { title: "Borehole", total: 5 },
        { title: "dam", total: 20 },
        { title: "Shallowwell", total: 20 },
        { title: "Springwell", total: 30 },
    ]

    return (
        <div className='bg-white rounded-xl p-2 w-full'>
            <div className=''>
                <h1 className='font-bold my-3'>Water source status  </h1>
                <div className='flex flex-wrap gap-1'>
                    {waterStatus.map((item, index) => (
                        <div className='bg-[#0D6EFD] text-white flex gap-2 items-center rounded-md py-[2px] px-[6px]' key={index}>
                            <h1 className='capitalize text-[12px]'>{item.title}</h1>
                            <span className='text-xs'>{item.total}</span>
                        </div>
                    ))}
                </div>
            </div>
            <hr className='my-4' />
            <div className=''>
            <Chart options={options} series={series} type="donut" />
            </div>
        </div>
    )
}

export default Barchart