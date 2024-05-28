'use client'
import React from 'react'
import Barchart from './_components/Barchart'
import WellsMap from '../map/_components/WellsMap'
import MapSO from './_components/MapSO'
import dynamic from 'next/dynamic'
// const Map = dynamic(() => import('../components/Map'), { ssr: false });


const page = () => {
  return (
    <div className='bg-white min-h-screen p-6 rounded-lg'>
    <div className='grid grid-cols-7 gap-4'>
      {/* Map */}
        <div className='col-span-2'>
          <MapSO/>
        </div>
        <div className='col-span-5'>
          {/* filter */}
          <div>
            <div className='flex justify-between gap-10'>
              <select name="" id="" className='border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none'>
                <option value="">Select region</option>
                <option value="">Nugaal</option>
                <option value="">bari</option>
              </select>
              <select name="" id="" className='border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none'>
                <option value="">Select district</option>
                <option value="">Nugaal</option>
                <option value="">bari</option>
              </select>
              <select name="" id="" className='border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none'>
                <option value="">Select village</option>
                <option value="">Nugaal</option>
                <option value="">bari</option>
              </select>
            </div>
          </div>
          {/* charts */}
          <div className='grid grid-cols-3 gap-3 my-6 h-fit'>
            <div className='border-gray-400 border-[1px] p-4'><Barchart/></div>
            <div className='border-gray-400 border-[1px] p-4'><Barchart/></div>
            <div className='border-gray-400 border-[1px] p-4'><Barchart/></div>
            <div className='border-gray-400 border-[1px] p-4'><Barchart/></div>
            <div className='border-gray-400 border-[1px] p-4'><Barchart/></div>
            <div className='border-gray-400 border-[1px] p-4'><Barchart/></div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default page