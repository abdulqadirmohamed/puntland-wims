'use client'
import { useEffect, useState } from 'react';
import RegionPieChart from './RegionPieChart';


type Region = {
  id: number;
  name: string;
  Well: { name: string }[];
};

const HomePage = () => {
  const [regions, setRegions] = useState<Region[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/api/waterSourcesRegions');
      const data: Region[] = await response.json();
      setRegions(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <RegionPieChart regions={regions} />
    </div>
  );
};

export default HomePage;
