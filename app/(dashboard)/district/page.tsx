import React from 'react'
import { DataTable } from './_components/data-table'
import { TWell, columns } from './column';

async function getUsers(): Promise<TWell[]> {
  const res = await fetch(`${process.env.API_URL}/api/district`, {
    cache: 'no-cache'
  })
  const data = await res.json()
  return data;
}
export default async function page() {
  const data = await getUsers()
  return (
    <div className='bg-white rounded-md p-5'>
      <h1>Districts <span className='bg-blue-600 text-white px-3 py-[2px] rounded-lg'>{data.length}</span></h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
