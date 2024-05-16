import { AlignJustify, CalendarDays, ChevronDown, LayoutGrid } from 'lucide-react'
import React from 'react'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"


const Header = () => {
  return (
    <div className='bg-[#14171C] text-white py-3 rounded-b-xl'>
      <div className='flex justify-between items-center mx-4'>
        <div className='flex gap-4 items-center'>
          <span className='cursor-pointer'><AlignJustify size={20} /></span>
          <span className='bg-[#1E2227] text-[#9c9c9c] p-3 rounded-full cursor-pointer'><LayoutGrid size={20} /></span>
          <h1>Water Information Management System</h1>
        </div>
        <div className='flex items-center gap-6 text-sm text-[#838dfd]'>
          <div className='flex items-center'>
            <span><CalendarDays size={20} /></span>
            <span>16 May 2024</span>
          </div>
          {/* <Popover>
            <PopoverTrigger className='flex items-center gap-2 cursor-pointer'>
            <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold'>A</div>
              Aisha
              <span><ChevronDown size={15} className='text-white' /></span>
            </PopoverTrigger>
            <PopoverContent className='w-18'>
              <button>Login</button>
            </PopoverContent>
          </Popover> */}
        </div>
      </div>
    </div >
  )
}

export default Header