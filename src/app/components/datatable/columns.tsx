"use client"

import { Payment } from "@/app/components/datatable/page"
import { DataTableCell } from "@/components/ui/DataTableCell"
import { DataTableHeader } from "@/components/ui/DataTableHeader"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: ({ column }) => {
      return <DataTableHeader column={column}>Status</DataTableHeader>
    },
    cell: ({ row }) => {
      const { status } = row.original
      return <div className="px-4 font-medium">{status}</div>
    },
  },

  {
    accessorKey: "email",
    header: ({ column }) => {
      return <DataTableHeader column={column}>Email</DataTableHeader>
    },
    cell: ({ row }) => {
      const { email } = row.original
      return <div className="px-4 font-medium">{email}</div>
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <DataTableHeader column={column} position="end">
          Amount
        </DataTableHeader>
      )
    },
    cell: ({ row }) => {
      const { amount } = row.original
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return (
        <DataTableCell row={row} position="end">
          {formatted}
        </DataTableCell>
      )
    },
  },
]
