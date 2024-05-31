'use client';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import MapSO from './MapSO';
import Charts from './RegionalAverages';
import DonutChart from './DonutChart';
import Filters from './Filter';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Home = () => {
  return (
    <div className='bg-white min-h-screen p-6 rounded-lg'>
      <div className='grid grid-cols-7 gap-4'>
        {/* Map */}
        <div className='col-span-2'>
          <MapSO />
        </div>
        <div className='col-span-5'>
          <Filters/>
          {/* charts */}
          <div className='grid grid-cols-3 gap-3 my-6 h-fit'>
            <div className='border-gray-300 border-[1px] rounded-md'>
                <Charts />
            </div>
            <div className='border-gray-300 border-[1px] rounded-md flex items-center justify-center'>
              <DonutChart/>
            </div>
            <div className='border-gray-300 border-[1px] rounded-md'>chart 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
