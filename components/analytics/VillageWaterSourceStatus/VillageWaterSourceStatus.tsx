'use client'
import { useEffect, useState } from 'react';
import VillagePieChart from './VillagePieChart';

type Village = {
  id: number;
  name: string;
  Well: { name: string }[];
};

const HomePage = () => {
  const [villages, setVillages] = useState<Village[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/api/village');
      const data: Village[] = await response.json();
      setVillages(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <VillagePieChart villages={villages} />
    </div>
  );
};

export default HomePage;
