"use client"
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

interface DonutChartProps {
    apiEndpoint: string;
}
const WaterSourceStatus: React.FC<DonutChartProps> = ({ apiEndpoint }) => {
    const [chartData, setChartData] = useState<number[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://664a65bfa300e8795d41dd1c.mockapi.io/waterresource');
                const data = await response.json();
                setChartData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                
            }
        };

        fetchData();
    }, [apiEndpoint]);

    console.log(chartData)
    const chartOptions = {
        chart: {
            type: 'donut',
        },
        labels: ['Planned', 'Functional', 'Non Functional', 'Completed'],
        colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
    };

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

                <Chart
                    options={chartOptions}
                    series={chartData}
                    type="donut"
                    width="380"
                />

            </div>
        </div>
    )
}

export default WaterSourceStatus


