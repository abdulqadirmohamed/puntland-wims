'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RadialBarChart from './RadialBarChart';

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
      <h1>pH Range of Wells</h1>
      {phData ? (
        <RadialBarChart minPh={phData.minPh} maxPh={phData.maxPh} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
