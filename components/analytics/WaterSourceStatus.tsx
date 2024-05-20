"use client"

import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";


interface WaterResource {
    id: string;
    name: string
    w_status: string
    water_total: number
}

const WaterSourceStatus = () => {
    const [chartData, setChartData] = useState({ options: {}, series: [] });

    // Fetch data from the API
    useEffect(() => {
        // Fetch data from the API
        fetch('https://664a65bfa300e8795d41dd1c.mockapi.io/waterresource')
            .then(res => res.json())
            .then((json: WaterResource[]) => {
                // Transform the data to match the required format for the chart
                const transformedData = {
                    options: {
                        chart: { id: 'apexchart-example' },
                        legend: { position: 'bottom' },
                        xaxis: {
                            categories: json.map(item => item.id) // Assuming 'id' is the label for the x-axis
                        }
                    },
                    series: [
                        {
                            name: 'Water Total',
                            data: json.map(item => item.water_total)
                        }
                    ]
                };
                // Update the state with the transformed data
                setChartData(transformedData);
            })
            .catch(rejected => {
                console.log(rejected);
            });
    }, []);


    const waterStatus = [
        { title: "Borehole", total: 5 },
        { title: "dam", total: 20 },
        { title: "Shallowwell", total: 20 },
        { title: "Springwell", total: 30 },
    ]

    // }
    // const series = [13, 34, 18, 20]; //our data
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
                <Chart
                    options={chartData.options}
                    series={chartData.series}
                    type="line" // You can change this to the type of chart you want (e.g., 'bar', 'line', 'area')
                    height={350} // Adjust height as necessary
                />

            </div>
        </div>
    )
}

export default WaterSourceStatus


