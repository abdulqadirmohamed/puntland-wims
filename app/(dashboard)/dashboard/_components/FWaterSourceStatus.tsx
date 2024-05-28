import React from 'react'
import Chart from 'react-apexcharts'

const FWaterSourceStatus = () => {


    const series = [44, 55]
    const chartLabels = ['Water Source', 'No Water Source'];
    const options = {
        chart: {
            type: 'donut',
        },
        legend: {
            position: 'bottom'
        },
        labels: chartLabels,
        colors: ["#15229C","#FDB515"],
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

    return (
        <div className='bg-white rounded-xl p-2 w-full'>
            <div className=''>
                <h1 className='font-bold my-3'>Water source status(%)</h1>
            </div>
            <hr className='my-4' />
            <div className=''>
                <Chart options={options} series={series} type="donut" />
            </div>
        </div>
    )
}

export default FWaterSourceStatus