'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const AddRegion = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    

    if (!name) {
      const errorMessage = "Region name required";
      toast.error(errorMessage);
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/region`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name
        }),
      });

      if (res.ok) {
        toast.success('Region created successfull')
        router.push('/region')
        router.refresh()
      } else {
        setError("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='my-6'>
        {error && (
            <div className="my-5">
              <span className="text-red-500">{error}</span>
            </div>
          )}
      <form action="" onSubmit={handleSubmit}>
        <div>
          <Input type='text' placeholder='Enter region name'
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='flex flex-row my-4'>
          <Button className="ml-auto flex items-center gap-2 bg-blue-600 text-white">
            <Plus />
            Add
          </Button>
        </div>
      </form >
    </div >
  )
}

export default AddRegion