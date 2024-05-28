'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'


const DeleteBtn = ({ id }: { id: number }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this region?")
    if (confirmed) {
      try {
        const res = await fetch(`/api/region/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });
        if (res.ok) {
          toast.success('Region deleted')
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

export default DeleteBtn