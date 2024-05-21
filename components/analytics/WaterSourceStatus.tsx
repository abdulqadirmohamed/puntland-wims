"use client"
import axios from "axios";
import { error } from "console";
import { use, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from 'react-apexcharts';

const WaterSourceStatus = () => {
    const [options, setObject] = useState({
        chart: {
            id: 'apexchart-example'
        },
        legend: {
            position: 'bottom'
        },
        labels: [],

    })
    const [series, setSeries] = useState([])

    useEffect(() => {
        // @ts-ignore
        const status = []; // @ts-ignore
        axios.get("http://localhost:3000/api/well").then(response => {
            console.log("response", response)
            // @ts-ignore
            response.data.map(item => {
                console.log("item", item)
                status.push(item.status);
            })
            // @ts-ignore
            setObject([{
                // @ts-ignore
                labels: status
            }])
            // @ts-ignore
            setSeries(status)
            // @ts-ignore
            console.log('status data', status)
        }).catch(error => {
            console.log(error)
        })

    }, [])

    const waterStatus = [
        { title: "Borehole", total: 5 },
        { title: "dam", total: 20 },
        { title: "Shallowwell", total: 20 },
        { title: "Springwell", total: 30 },
    ]
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
                <ReactApexChart options={options} series={series} type="donut" height={350} />

            </div>
        </div>
    )
}

export default WaterSourceStatus


