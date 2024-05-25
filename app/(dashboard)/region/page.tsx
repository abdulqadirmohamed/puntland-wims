import React from 'react'
import { DataTable } from './_components/data-table'
import { TRegion, columns } from './column';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

async function getUsers(): Promise<TRegion[]> {
  const res = await fetch('http://localhost:3000/api/region', {
    cache: 'no-cache'
  })
  const data = await res.json()
  return data;
}
export default async function page() {

  const data = await getUsers()
  return (
    <div className='bg-white rounded-md p-5'>
      <h1>Regions <span className='bg-blue-600 text-white px-3 py-[2px] rounded-lg'>{data.length}</span></h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
