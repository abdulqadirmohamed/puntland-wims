"use client"

import { ColumnDef } from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import DeleteDistrict from "./_components/DeleteDistrict"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TWell = {
  id: number
  name: string
  region: []
  District: []
  Well: []
  population: number
  created_at: string
  Action: string
}

export const columns: ColumnDef<TWell>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },

  {
    accessorKey: 'region.name',
    header: "Region",
  },
  {
    accessorKey: 'Village.length',
    header: "Village",
  },
  {
    accessorKey: 'Well.length',
    header: "Water Source",
  },
  {
    accessorKey: '',
    header: "Population",
  },
  {
    accessorKey: '',
    header: "Water connection",
  },
  {
    accessorKey: '',
    header: "Average ph",
  },
  {
    accessorKey: '',
    header: "Average conductivity",
  },
  {
    accessorKey: '',
    header: "Average price",
  },
  {
    accessorKey: '',
    header: "Percent of village WS",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const district = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>
              <DeleteDistrict id={district.id}/>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  // ...
]
