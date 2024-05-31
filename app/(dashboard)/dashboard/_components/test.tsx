'use client'
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import MapSO from './MapSO';

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
    // console.log(data.flatMap(region => region.Well))


    if (region && region === 'All') {
      const regionData = data.find(r => r.name === region);
      wells = wells.filter(well => well.regionId === regionData?.id);
    }

    if (region) {
      const regionData = data.find(r => r.name === region);
      wells = wells.filter(well => well.regionId === regionData?.id);
      console.log(region, wells)
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


  const chartOptions = {
    chart: {
      id: 'wells-chart',
      stacked: true,
      toolbar: {
        show: true
      }
    },
    xaxis: {
      categories: filteredWells.map(well => well?.name || 'Unknown')
    },
    total: {
      enable: true
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
    <div className='bg-white min-h-screen p-6 rounded-lg'>
      <div className='grid grid-cols-7 gap-4'>
        {/* Map */}
        <div className='col-span-2'>
          <MapSO />
        </div>
        <div className='col-span-5'>
          {/* filter */}
          <div>
            <div className='flex justify-between gap-10'>
              <select onChange={e => setRegion(e.target.value)} value={region}
                className='border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none'>
                <option value='all'>Select Region</option>
                {data.map(region => (
                  <option key={region.id} value={region.name}>{region.name}</option>
                )) || []}
              </select>
              <select onChange={e => setDistrict(e.target.value)} value={district}
                className='border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none'>
                <option value=''>Select District</option>
                {data.find(r => r.name === region)?.District?.map(district => (
                  <option key={district.id} value={district.name}>{district.name}</option>
                )) || []}
              </select>
              <select onChange={e => setVillage(e.target.value)} value={village}
                className='border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none'>
                <option value=''>Select Village</option>
                {data.find(r => r.name === region)?.Village.map(village => (
                  <option key={village.id} value={village.name}>{village.name}</option>
                )) || []}
              </select>
            </div>
          </div>
          {/* charts */}
          <div className='grid grid-cols-3 gap-3 my-6 h-fit'>
            <div className='border-gray-300 border-[1px] rounded-md mx-auto'>
              <Chart options={chartOptions} series={chartSeries} type="bar" height={320} width={300} />
            </div>
            <div className='border-gray-300 border-[1px] rounded-md'>
              <Chart options={chartOptions} series={chartSeries} type="bar" height={320} width={300}/>
            </div>
            <div className='border-gray-300 border-[1px] rounded-md'>chart 3</div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Home;
