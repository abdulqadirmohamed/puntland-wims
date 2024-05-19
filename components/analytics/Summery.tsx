import { Goal, GoalIcon, PieChart } from 'lucide-react'
import React from 'react'

const Summery = () => {
    const regions = [
        { title: "Regions", total: 5 },
        { title: "Districts", total: 20 },
        { title: "Villages", total: 20 },
        { title: "Water soruces", total: 30 },
    ]
    const stateAverages = [
        { title: "ph", total: 6 },
        { title: "Conductivity", total: 20 },
        { title: "price", total: 0 },
    ]
    return (
        <div className='grid lg:grid-cols-3 grid-cols-4 gap-4'>

            <div className='min-w-80 bg-[#757FEF] rounded-md lg:col-span-1 col-span-4 p-7 text-white'>
                <h1 className='font-bold text-lg'>Welcome to Puntland Water Information Managament System</h1>
                <p className='text-sm mt-3'>Ministry Of Energy Minerals & Water.</p>
            </div>

            <div className='min-w-80 lg:col-span-1 md:col-span-2 col-span-4'>
                <div className='bg-white rounded-md flex items-center gap-5 px-7 py-10 shadow-sm lg-col-span-2'>
                    <div className='bg-[#EAEEFD] text-[#757FEF] p-4 rounded-md'>
                        <PieChart size={40} />
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        {regions.map((item, index) => (
                            <div className='flex items-center gap-2' key={index}>
                                <h1 className='capitalize text-sm'>{item.title}</h1>
                                <span className='bg-[#0D6EFD] text-white rounded-md py-[2px] px-[6px] text-sm'>{item.total}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className='min-w-80 lg:col-span-1 md:col-span-2 col-span-4'>
                <div className='bg-white rounded-md flex items-center gap-5 px-7 py-10 shadow-sm lg-col-span-2'>
                    <div className='bg-[#EAEEFD] text-[#757FEF] p-4 rounded-md'>
                        <Goal size={40} />
                    </div>
                    <div className=''>
                        <h1 className='my-3 text-[#757FEF] font-bold'>State Averages</h1>
                        <div className='flex items-center gap-3'>
                            {stateAverages.map((item, index) => (
                                <div className='flex items-center gap-2' key={index}>
                                    <h1 className='capitalize text-sm'>{item.title}</h1>
                                    <span className='bg-[#0D6EFD] text-white rounded-md py-[2px] px-[6px] text-sm'>{item.total}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summery