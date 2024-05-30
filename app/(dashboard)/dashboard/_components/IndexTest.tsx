'use client'
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type Well = {
  id: number;
  name: string;
  regionId: number;
  districtId: number;
  villageId: number;
  type: string;
  status: string;
  average_ph?: number;
  average_conductivity?: number;
  average_price?: number;
};

type District = {
  id: number;
  name: string;
};

type Village = {
  id: number;
  name: string;
};

type Region = {
  id: number;
  name: string;
  District: District[];
  Village: Village[];
  Well: Well[];
};

const Home = () => {
  const [data, setData] = useState<Region[]>([]);
  const [region, setRegion] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [village, setVillage] = useState<string>('');
  const [filteredWells, setFilteredWells] = useState<Well[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/api/filter');
      setData(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let wells = data.flatMap(region => region.Well);

    if (region) {
      const regionData = data.find(r => r.name === region);
      wells = wells.filter(well => well.regionId === regionData?.id);
    }

    if (district) {
      const regionData = data.find(r => r.name === region);
      const districtData = regionData?.District.find(d => d.name === district);
      wells = wells.filter(well => well.districtId === districtData?.id);
    }

    if (village) {
      const regionData = data.find(r => r.name === region);
      const villageData = regionData?.Village.find(v => v.name === village);
      wells = wells.filter(well => well.villageId === villageData?.id);
    }

    // Filter out undefined wells
    wells = wells.filter(well => well !== undefined);

    setFilteredWells(wells);
  }, [region, district, village, data]);

  // Debugging: Log filtered wells
  useEffect(() => {
    console.log('Filtered Wells:', filteredWells);
  }, [filteredWells]);

  const chartOptions = {
    chart: {
      id: 'wells-chart'
    },
    xaxis: {
      categories: filteredWells.map(well => well?.name || 'Unknown') 
    }
  };

  const chartSeries = [
    {
      name: 'pH Level',
      data: filteredWells.map(well => well?.average_ph || 0)
    },
    {
      name: 'Conductivity',
      data: filteredWells.map(well => well?.average_conductivity || 0)
    },
    {
      name: 'Price',
      data: filteredWells.map(well => well?.average_price || 0)
    }
  ];

  return (
    <div>
      <h1>Wells Data</h1>
      <div className='flex justify-between'>
        <div>
          <label>
            Region:
            <select onChange={e => setRegion(e.target.value)} value={region}>
              <option value=''>Select Region</option>
              {data.map(region => (
                <option key={region.id} value={region.name}>{region.name}</option>
              )) || []}
            </select>
          </label>
        </div>
        <div>
          <label>
            District:
            <select onChange={e => setDistrict(e.target.value)} value={district}>
              <option value=''>Select District</option>
              {data.find(r => r.name === region)?.District?.map(district => (
                <option key={district.id} value={district.name}>{district.name}</option>
              )) || []}
            </select>
          </label>
        </div>
        <div>
          <label>
            Village:
            <select onChange={e => setVillage(e.target.value)} value={village}>
              <option value=''>Select Village</option>
              {data.find(r => r.name === region)?.Village.map(village => (
                <option key={village.id} value={village.name}>{village.name}</option>
              )) || []}
            </select>
          </label>
        </div>

      </div>
      <Chart options={chartOptions} series={chartSeries} type="bar" height={320} />
    </div>
  );
};

export default Home;
