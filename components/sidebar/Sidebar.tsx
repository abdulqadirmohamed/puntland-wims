import React from 'react'
import { SideBarItems } from './Constant'
import SideBarList from './SideBarList'
import logo from '../../img/logo-icon.png'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className='md:min-w-[300px] w-[80px]  min-h-screen flex flex-col gap-10 border-r p-4 rounded-r-xl bg-[#14171C] text-white'>
      <div className='flex md:flex-row sm:flex-col items-center gap-2 ml-4'>
        <Image src={logo} alt='puntland logo' width={60} height={60} />
        <h1>WIMS</h1>
      </div>
      <div className='md:ml-6 ml-0'>
        {SideBarItems.map((item, index) => (
          <SideBarList key={index} item={item} />
        ))}
      </div>
      {/* <div>Setting</div> */}
    </div>
  )
}

export default Sidebar