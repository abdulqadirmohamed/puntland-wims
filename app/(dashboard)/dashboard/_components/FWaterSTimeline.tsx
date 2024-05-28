import React from 'react'
import Chart from 'react-apexcharts'

const FWaterSTimeline = () => {
  const series = [
    {
      data: [
        {
          x: 'Code',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-04').getTime()
          ]
        },
        {
          x: 'Test',
          y: [
            new Date('2019-03-04').getTime(),
            new Date('2019-03-08').getTime()
          ]
        },
        {
          x: 'Validation',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-12').getTime()
          ]
        },
        {
          x: 'Deployment',
          y: [
            new Date('2019-03-12').getTime(),
            new Date('2019-03-18').getTime()
          ]
        }
      ]
    }
  ]

  const options = {
    chart: {
      height: 350,
      type: 'rangeBar'
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    xaxis: {
      type: 'datetime'
    }
  }
  const waterStatus = [
    { title: "Upcoming water sourcese", total: 10 }
  ]
  return (
    <div className='bg-white rounded-xl p-2 w-full'>
      <div className=''>
        <h1 className='font-bold my-3'>Planed Water sources timeline</h1>
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
        <Chart options={options} series={series} type="rangeBar" />
      </div>
    </div>
  )
}

export default FWaterSTimeline