'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RadialBarChart from './RadialBarChart';
import { BarChart2 } from 'lucide-react';

interface PhData {
  minPh: number;
  maxPh: number;
}

const Home: React.FC = () => {
  const [phData, setPhData] = useState<PhData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/ph_avarage');
        setPhData(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
     <div className='bg-white rounded-xl p-6' >
      <div className='flex gap-4'>
        <h1 className='font-meduim'>Min/Max for ph</h1>
      </div>
      <hr className='my-4' />
      <div className='flex justify-between items-center mx-6 font-medium'>
        <p>Min {phData?.minPh}</p>
        <div className='flex items-center gap-1 text-[#393658]'>
          <BarChart2 />
          <p>Max {phData?.maxPh}</p>
        </div>
      </div>
      <div className='mt-5'>
      {phData ? (
        <RadialBarChart minPh={phData.minPh} maxPh={phData.maxPh} />
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </div >
    </div>
  );
};

export default Home;
