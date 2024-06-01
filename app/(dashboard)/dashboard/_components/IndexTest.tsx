'use client';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import Charts from './RegionalAverages';
import DonutChart from './DonutChart';
import Filters from './Filter';
import SomaliaMap from './SomaliaMap';
import WaterSourceStatus from './charts/Water-source-status';
import PlannedWaterSourcesTimeline from './charts/Planned-Water-sources-timeline';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Home = () => {
  return (
    <div className='bg-white min-h-screen p-6 rounded-lg'>
      <div className='grid grid-cols-7 gap-4'>
        {/* Map */}
        <div className='col-span-2'>
          <SomaliaMap />
        </div>
        <div className='col-span-5'>
          <Filters />
          <div className='my-5'>
            <span className='bg-blue-600 text-white py-2 px-3 rounded-md capitalize text-sm'>All total wells {12}</span>
          </div>
          {/* charts */}
          <div className='grid md:grid-cols-3 gap-3 my-6 h-fit capitalize'>
            <div className='border-gray-300 border-[1px] rounded-md text-sm'>
              <h1 className='text-center my-4 font-bold'>Regional Averages</h1>
              <Charts />
            </div>
            <div className='border-gray-300 border-[1px] rounded-md text-sm'>
              <h1 className='text-center my-4 font-bold'>Planned water source(%)</h1>
              <DonutChart />
            </div>
            <div className='border-gray-300 border-[1px] rounded-md'>
              <h1 className='text-center my-4 font-bold'>Water source status(%)</h1>
              <WaterSourceStatus />
            </div>
            <div className='border-gray-300 border-[1px] rounded-md'>
              <h1 className='text-center my-4 font-bold'>Planned Water sources timeline</h1>
              <PlannedWaterSourcesTimeline/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
