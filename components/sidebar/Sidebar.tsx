"use client"
import React, { useState } from 'react'
import { SideBarItems } from './Constant'
import SideBarList from './SideBarList'
import logo from '../../img/logo-icon.png'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className=''>
      <div className="min-h-screen flex flex-col gap-10 border-r p-4 rounded-r-xl bg-[#14171C] text-white">
        <Link href={'/'} className='flex md:flex-row sm:flex-col items-center gap-2 ml-4'>
          <Image src={logo} alt='puntland logo' width={60} height={60} />
          <h1>WIMS </h1>
        </Link>
        <div className='md:ml-6 ml-0'>
          {SideBarItems.map((item, index) => (
            <SideBarList key={index} item={item} />
          ))}
        </div>
        {/* <div>Setting</div> */}
      </div>
    </div>
  )
}

export default Sidebar