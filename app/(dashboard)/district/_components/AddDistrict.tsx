'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export type TRegion = {
    id: number
    name: string
    District: []
    Village: []
    Well: []
    Action: string
}

const AddDistrict = () => {
    const [name, setName] = useState("");
    const [regions, setRegions] = useState<TRegion[]>([]);
    const [selectedRegion, setSelectedRegion] = useState("");

    const router = useRouter();

    useEffect(() => {
        const getRegion = async () => {
            const res = await fetch("api/region");
            const regionName = await res.json();
            setRegions(regionName);
        };
        getRegion();
    }, []);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name) {
            const errorMessage = "Title and content are required";
            toast.error(errorMessage);
            return;
        }

        try {
            const res = await fetch("api/district", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    selectedRegion,
                }),
            });

            if (res.ok) {
                router.push("/");
                router.refresh()
            } else {
                toast.error("Something went wrong.");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='my-4'>
            <form action="" onSubmit={handleSubmit}>
                <div className='my-3'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">District name</label>
                    <input type='text' placeholder='Enter district name'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='my-3'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Region</label>
                    <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 capitalize"
                        onChange={(e) => setSelectedRegion(e.target.value)}
                        required>

                        {regions &&
                            regions.map((region: TRegion) => (
                                <option value="" key={region.id} className='py-6'>
                                    {region.name}
                                </option>
                            ))}
                    </select>
                </div>
                <div className='flex flex-row my-4'>
                    <Button className="ml-auto flex items-center gap-2 bg-blue-600 text-white">
                        <Plus />
                        Add
                    </Button>
                </div>
            </form >
        </div>
    )
}

export default AddDistrict