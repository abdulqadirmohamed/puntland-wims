import React from 'react'
import Chart from 'react-apexcharts'

const Barchart = () => {


   const  series = [44, 55, 41, 17, 15]
       const options = {
        chart: {
            type: 'donut',
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

return (
    <div className=''>
         <Chart options={options} series={series} type="donut" />
    </div>
)
}

export default Barchart