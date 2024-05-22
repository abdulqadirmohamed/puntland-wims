'use client'
import WaterSourceStatus from '@/components/analytics/donutchart/WaterSourceStatus';
import { useEffect, useState } from 'react';

type StatusTotals = {
    functional: number;
    nonFunctional: number;
    planned: number;
    completed: number;
};

const StatusPage = () => {
    const [totals, setTotals] = useState<StatusTotals | null>(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/api/statusTotals');
            const data: StatusTotals = await response.json();
            setTotals(data);
        }

        fetchData();
    }, []);

    if (!totals) return <div>Loading...</div>;
    const waterStatus = [
        { title: "Borehole", total: 5 },
        { title: "dam", total: 20 },
        { title: "Shallowwell", total: 20 },
        { title: "Springwell", total: 30 },
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
            <div className='max-w-[700px] mx-auto flex flex-col items-center justify-center'>
                <WaterSourceStatus totals={totals} />
            </div>
        </div>
    );
};

export default StatusPage;
