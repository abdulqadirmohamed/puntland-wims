"use client"
import { AlignJustify, CalendarDays, ChevronDown, LayoutGrid } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SideBarItems } from './sidebar/Constant'
import Link from 'next/link'

const dateOpject = new Date()
const options: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}
const formattedDate = dateOpject.toLocaleDateString('en-gb', options)

const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className=''>
      {/* <div className={`${isHeaderFixed ? 'fixed z-40 transition-all ease-in duration-300 top-0' : ''} h-16  bg-[#14171C]  text-white py-3 rounded-b-xl transition-all w-full`}> */}
      <div className={` h-16  bg-[#14171C]  text-white py-3 rounded-b-xl transition-all w-full z-50`}>
        <div className='flex justify-between items-center mx-4'>
          <div className='flex gap-4 items-center'>
            <span className='cursor-pointer'><AlignJustify size={20} /></span>
            <span>
              <Popover>
                <PopoverTrigger className='flex items-center gap-2 cursor-pointer relative'>
                  <div className='bg-[#1E2227] text-[#9c9c9c] p-3 rounded-full cursor-pointer'>
                    <LayoutGrid size={20} />
                  </div>
                </PopoverTrigger>
                <PopoverContent className='min-w-18 absolute left-0'>
                  <div className="grid gap-4">
                    <div className="space-y-2 bg-[#757FEF] rounded-md text-white text-lg font-bold px-4 py-3 h-fit w-full">
                      <h4 className="font-medium leading-none">Quick Links</h4>
                    </div>
                    <div className='flex flex-wrap items-center justify-center gap-6 '>
                      {SideBarItems.map((item, index) => (
                        <Link href={item.path} className='flex items-center flex-col text-[14px] text-[#939cfd] hover:text-[#757FEF]' key={index}>
                          <span className='text-[9px]'>{item.icon}</span>
                          <h1 >{item.title}</h1>
                        </Link>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </span>
            <h1 className='hidden md:flex'>Water Information Management System</h1>
          </div>
          <div className='flex items-center gap-6 text-[#838dfd] z-50'>
            <div className='lg:flex gap-2 items-center hidden border-[1px] border-[#1E2227] px-3 py-2 rounded-md'>
              <span><CalendarDays size={20} /></span>
              <span className='text-[15px]'>{formattedDate}</span>
            </div>
            <Popover>
              <PopoverTrigger className='flex items-center gap-2 cursor-pointer'>
                <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold'>A</div>
                <span className='text-sm'>Aisha</span>
                <span><ChevronDown size={15} className='text-white' /></span>
              </PopoverTrigger>
              <PopoverContent className='w-18'>
                <button>Login</button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div >

    </div>
  )
}

export default Header