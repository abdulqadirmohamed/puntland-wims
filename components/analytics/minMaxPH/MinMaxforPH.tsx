'use client'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'
import { Well } from '@prisma/client'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const Home = () => {
  const [wells, setWells] = useState<Well[]>([])
  const [combinedPh, setCombinedPh] = useState<number | null>(null)

  useEffect(() => {
    axios.get('http://localhost:3000/api/ph_avarage')
      .then(response => {
        const wellsData = response.data
        setWells(wellsData)
        const phValues = wellsData.map((well: Well) => well.average_ph).filter((ph: number | null) => ph !== null) as number[]
        const sumPh = phValues.reduce((acc, ph) => acc + ph, 0)
        setCombinedPh(sumPh)
      })
  }, [])

  const phData = wells.reduce((acc: { [key: string]: number }, well) => {
    if (well.average_ph !== null) {
      acc[well.name] = well.average_ph
    }
    return acc
  }, {})

  const chartData = {
    series: Object.values(phData),
    labels: Object.keys(phData),
    chartOptions: {
      labels: Object.keys(phData)
    }
  }

  return (
    <div>
      <h1>Well pH Data</h1>
      <p>Combined pH of all wells: {combinedPh}</p>
      <Chart
        options={chartData.chartOptions}
        series={chartData.series}
        type="radialBar"
        width="500"
      />
    </div>
  )
}

export default Home
