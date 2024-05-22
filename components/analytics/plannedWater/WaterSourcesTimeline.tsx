'use client'
import { useEffect, useState } from 'react';
import RangeBarChart from './RangeBarChart';

type Project = {
  name: string;
  start_date: string;
  expected_date: string;
};

const WaterSourcesTimeline = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/api/plannedWater');
      const data: Project[] = await response.json();
      setProjects(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  const waterStatus = [
    { title: "Borehole", total: 5 }
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
      <div className='max-w-[700px] mx-auto'>
        <RangeBarChart projects={projects} />
      </div>
    </div>
  );
};

export default WaterSourcesTimeline;
