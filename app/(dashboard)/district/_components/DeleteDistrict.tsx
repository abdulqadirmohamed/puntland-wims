'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'


const DeleteDistrict = ({ id }: { id: number }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this district?")
    if (confirmed) {
      try {
        const res = await fetch(`/api/district/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });
        if (res.ok) {
          toast.success('District deleted')
          router.refresh();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  )
}

export default DeleteDistrict