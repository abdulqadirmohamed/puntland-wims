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
        xaxis: {
           
            category: []
        },
    })
    
    const [series, setSeries] = useState([{
        name: 'series 1',
        data: []
    }])



    useEffect(() => {
        // @ts-ignore
        const age = []; // @ts-ignore
        const salary = [];
        axios.get("https://dummy.restapiexample.com/api/v1/employees").then(response => {
            console.log("response", response)
            // @ts-ignore
            response.data.data.map(item => {
                console.log("item", item)
                age.push(item.employee_age);
                salary.push(item.employee_salary)
            })
            setObject({
                chart: {
                    id: 'apexchart-example'
                },
                xaxis: {
                    // @ts-ignore
                    categories: salary
                },
            })
            setSeries([{
                name: 'Age',
                // @ts-ignore
                data: age
            }])

            // @ts-ignore
            console.log(age, salary)
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
                <ReactApexChart options={options} series={series} type="line" height={350} />

            </div>
        </div>
    )
}

export default WaterSourceStatus


