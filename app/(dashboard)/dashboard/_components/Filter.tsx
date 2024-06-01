import { useEffect } from 'react';
import axios from 'axios';
import useStore from '../store';

const Filters = () => {
  const { data, region, district, village, setData, setRegion, setDistrict, setVillage } = useStore();
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/api/filter');
      setData(response.data);
    };
    fetchData();
  }, [setData]);

  return (
    <div className='flex justify-between items-center gap-3'>
      <select
        onChange={(e) => setRegion(e.target.value)}
        value={region}
        className='border border-gray-300 text-gray-600 capitalize text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none'
      >
        <option value='All'>Select Region</option>
        {data.map((region) => (
          <option key={region.id} value={region.name}>
            {region.name}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => setDistrict(e.target.value)}
        value={district}
        className='border border-gray-300 text-gray-600 capitalize text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none'
      >
        <option value=''>Select District</option>
        {data.find((r) => r.name === region)?.District?.map((district) => (
          <option key={district.id} value={district.name}>
            {district.name}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => setVillage(e.target.value)}
        value={village}
        className='border border-gray-300 text-gray-600 capitalize text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none'
      >
        <option value=''>Select Village</option>
        {data.find((r) => r.name === region)?.Village?.map((village) => (
          <option key={village.id} value={village.name}>
            {village.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
