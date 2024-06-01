import React from 'react'
import Chart from 'react-apexcharts'
import moment from 'moment'

const PlannedWaterSourcesTimeline = () => {

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
            legend: {
                position: 'top'
            },
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        xaxis: {
            type: 'datetime'
        },
        fill: {
            type: 'gradient',
        },
        dataLabels: {
            enabled: true,
            formatter: function(val:any) {
              var a = moment(val[0])
              var b = moment(val[1])
              var diff = b.diff(a, 'days')
              return diff + (diff > 1 ? ' days' : ' day')
            }
          },
    }





    return (
        <Chart options={options} series={series} type="rangeBar" height={250} />
    )
}

export default PlannedWaterSourcesTimeline