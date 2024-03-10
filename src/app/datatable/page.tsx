import { columns } from "@/app/datatable/columns"
import { DataTable } from "@/components/ui/DataTable"
import { Stack } from "@/components/ui/Stack"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
]

export default async function DatatablePage() {
  return (
    <main className="gap flex min-h-screen flex-col">
      <Stack gap={1} direction={"column"} align={"center"} justify={"center"}>
        <div className="h-12 w-12 rounded-md bg-gray-100" />
        <div className="h-12 w-12 rounded-md bg-gray-100" />
        <div className="h-12 w-12 rounded-md bg-gray-100" />
      </Stack>

      <DataTable
        columns={columns}
        data={payments}
        title={"Data Table"}
        filterPlaceholder="Search emails..."
        filterColumn="status"
        hasPagination={false}
        hasFilter={true}
      />
    </main>
  )
}
