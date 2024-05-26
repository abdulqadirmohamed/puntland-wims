'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus } from 'lucide-react'
import React from 'react'

const AddRegion = () => {
  return (
    <div className='my-6'>
      <form action="">
        <div>
          <Input type='text' placeholder='Enter region name' className="" />
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